import { adminGuard } from './services/admin.guard';

import { Routes } from '@angular/router';
import { Exercises } from './exercises/exercises';
import { Home } from './home/home';
import { About } from './about/about';
import { Users } from './users/users';
import { authGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'about', component: About, canActivate: [authGuard] },
  { path: 'exercises', component: Exercises, canActivate: [authGuard] },
  // { path: 'users', component: Users },
  {
    path: 'users',
    loadChildren: () => import('@user-lib').then(m => m.USER_LIB_ROUTES),
    canActivate: [authGuard, adminGuard]
  },
  { path: '**', redirectTo: '/home' }
];
