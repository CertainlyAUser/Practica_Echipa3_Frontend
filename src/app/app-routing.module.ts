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
import { NewUsersComponent } from './components/admin/new-users/new-users.component';

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
  { path: 'announcement-details/:id', component: AnnouncementDetailsComponent },
  { path: 'new-users', component: NewUsersComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
const config = { useHash: true, enableTracing: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
