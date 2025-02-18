import { Routes } from '@angular/router';
import { WelcomeScreenComponent } from './views/welcome-screen/welcome-screen.component';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeScreenComponent,
  },
  {
    path: 'selection',
    component: WelcomeScreenComponent,
  },
  {
    path: 'play',
    component: WelcomeScreenComponent,
  },
];
