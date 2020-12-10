import { Routes, RouterModule } from '@angular/router';
import { AnnouncementListComponent } from '../app/components/announcement-list/announcement-list.component';

import { HomeComponent } from './home';
import { LandingPageComponent } from './landing-page';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing-page', component: LandingPageComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
