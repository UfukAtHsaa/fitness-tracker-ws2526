import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface UserDetails {
  username: string;
  authorities: { authority: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1';
  private authSecret$: BehaviorSubject<string | undefined>;
  private userSubject$: BehaviorSubject<UserDetails | undefined> = new BehaviorSubject<UserDetails | undefined>(undefined);

  constructor(private readonly http: HttpClient) {
    const token = sessionStorage.getItem('token');
    const userJson = sessionStorage.getItem('user');

    this.authSecret$ = new BehaviorSubject<string | undefined>(token || undefined);

    if (userJson) {
      this.userSubject$.next(JSON.parse(userJson));
    } else if (token) {
      // If token exists but user details are not in session storage (e.g., old session or direct refresh after initial implementation)
      this.loadUser();
    }
  }

  get token$(): Observable<string | undefined> {
    return this.authSecret$.asObservable();
  }

  get user$(): Observable<UserDetails | undefined> {
    return this.userSubject$.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    const token = btoa(`${username}:${password}`);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${token}`
    });

    return this.http.post<UserDetails>(`${this.apiUrl}/login`, {}, { headers }).pipe(
      tap((user) => {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.authSecret$.next(token);
        this.userSubject$.next(user);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.authSecret$.next(undefined);
    this.userSubject$.next(undefined);
  }

  hasRole(role: string): boolean {
    return this.userSubject$.value?.authorities?.some(a => a.authority === role) || false;
  }

  private loadUser() {
    const token = sessionStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Basic ${token}`
      });
      this.http.post<UserDetails>(`${this.apiUrl}/login`, {}, { headers }).subscribe(user => {
        this.userSubject$.next(user);
      });
    }
  }
}
