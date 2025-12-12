import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.token$.pipe(
    take(1),
    map(token => {
      if (token) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
