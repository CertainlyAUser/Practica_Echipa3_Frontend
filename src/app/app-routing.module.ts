import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementFormComponent } from './core/addannouncement/announcement-form/announcement-form.component';
import { EditannouncementComponent } from './core/editannouncement/editannouncement.component';


const routes: Routes = [
  {
    path: 'add',
    component: AnnouncementFormComponent
  },
  {
    path: 'edit/:id',
    component: EditannouncementComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
