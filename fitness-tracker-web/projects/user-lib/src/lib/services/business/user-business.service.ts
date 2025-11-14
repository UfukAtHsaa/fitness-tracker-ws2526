import { inject, Injectable } from '@angular/core';
import { User } from '@user-lib';
import { Observable, Subject, tap } from 'rxjs';
import { UserProviderService } from '../providers/user-provider.service';

@Injectable({
  providedIn: 'root'
})
export class UserBusinessService {

  private userProviderService = inject(UserProviderService);
  private createdUserSubject = new Subject<User>();
  createdUser$ = this.createdUserSubject.asObservable();

  addUser(user: User): Observable<User> {
    return this.userProviderService.createUser(user).pipe(
      tap((createdUser) => {
        this.createdUserSubject.next(createdUser);
      })
    );
  }


  getAllUsers(): Observable<User[]> {
    return this.userProviderService.getAllUsers()
      .pipe( // Verkettung
        tap( // Bsp. Methode -> side-effects "einhaken um log zu schreiben"
          (users: User[]) => {
            console.log(users);
          })
      );
  }

  getUserById(id: string): Observable<User> {
    return this.userProviderService.getUserById(id);
  }
}
