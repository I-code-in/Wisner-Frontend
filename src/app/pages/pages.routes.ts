import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { HomeComponent } from './home/home.component';

export const PagesRoutes: Routes = [ 
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      urls: [
        { title: 'Home', url: '' },
      ],
    },
  },
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
];
