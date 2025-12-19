import { adminGuard } from './services/admin.guard';

import { Routes } from '@angular/router';
import { About } from './about/about';
import { Exercises } from './exercises/exercises';
import { Home } from './home/home';
import { LoginComponent } from './login/login.component';
import { authGuard } from './services/auth.guard';

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
