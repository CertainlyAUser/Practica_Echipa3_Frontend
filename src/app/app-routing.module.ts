import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementFormComponent } from './core/addannouncement/announcement-form/announcement-form.component';
import { EditannouncementComponent } from './core/editannouncement/editannouncement.component';

import { HomeComponent } from './home';
import { LandingPageComponent } from './landing-page';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';

const routes: Routes = [
  {
    path: 'add',
    component: AnnouncementFormComponent
  },
  {
    path: 'edit/:id',
    component: EditannouncementComponent
  },
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'announcement-details/:id', component: AnnouncementDetailsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
const config = { useHash: true, enableTracing: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
