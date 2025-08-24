import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
 {
    path: '',
    component: HomeComponent,
    title: 'Sākumlapa'
  },
  {
    path: 'login',
    loadComponent: () => import('./components/auth/login.component').then(m => m.LoginComponent),
    title: 'Pieslēgties'
  },
  {
    path: 'register',
    loadComponent: () => import('./components/auth/registration.component').then(m => m.RegisterComponent),
    title: 'Reģistrēties'
  }
];
