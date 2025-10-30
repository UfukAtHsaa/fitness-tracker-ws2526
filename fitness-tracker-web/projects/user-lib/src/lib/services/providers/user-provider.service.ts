import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../domain/models';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/v1/users';

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
