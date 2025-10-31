import { Routes } from '@angular/router';
import { AddUserDialogComponent } from './view/add-user-dialog/add-user-dialog';
import { UserListComponent } from './view/user-list/user-list';
import { UserManagementComponent } from './view/user-management/user-management';
import { TabNavigationComponent } from './view/tab-navigation/tab-navigation';
import { UserProfileComponent } from './view/user-profile/user-profile';

export const USER_LIB_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'management',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabNavigationComponent,
    children: [

      {
        path: 'management',
        component: UserManagementComponent
      },
      {
        path: 'list',
        component: UserListComponent,
        children: [

        ]
      },
      {
        path: 'list/:id',
        component: UserProfileComponent
      },
    ]
  },


  {
    path: 'add-user',
    component: AddUserDialogComponent,
    outlet: 'dialog'
  }
];
