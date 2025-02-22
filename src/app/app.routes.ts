import { Routes } from '@angular/router';
import { WelcomeScreenComponent } from './views/welcome-screen/welcome-screen.component';
import { PlayScreenComponent } from './views/play-screen/play-screen.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    component: WelcomeScreenComponent
  },
  {
    path: 'selection',
    component: WelcomeScreenComponent
  },
  {
    path: 'play',
    component: PlayScreenComponent
  }
];
