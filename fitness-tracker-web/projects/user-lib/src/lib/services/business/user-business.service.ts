import { inject, Injectable } from '@angular/core';
import { User } from '@user-lib';
import { Observable, take, tap } from 'rxjs';
import { UserProviderService } from '../providers/user-provider.service';

@Injectable({
  providedIn: 'root'
})
export class UserBusinessService {

  private userProviderService = inject(UserProviderService);

  createUser(user: User): User {
    let created: User = { id: 0, name: '', email: '' };
    this.userProviderService.createUser(user).subscribe((user: User) => {
      // do some other stuff
      created = user;
      // and here as well?
    });
    return created;
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
