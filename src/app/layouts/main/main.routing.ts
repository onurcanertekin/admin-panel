import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'genel',
        // loadChildren: () =>
        //   import('../../modules/registration/registration.module').then(
        //     (m) => m.RegistrationModule
        //   ),
      },
     
    ],
  },
];
