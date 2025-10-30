import { Routes } from '@angular/router';
import { Exercises } from './exercises/exercises';
import { Home } from './home/home';
import { About } from './about/about';
import { Users } from './users/users';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'exercises', component: Exercises },
    { path: 'users', component: Users },
    { path: '**', redirectTo: '/home' }
];
