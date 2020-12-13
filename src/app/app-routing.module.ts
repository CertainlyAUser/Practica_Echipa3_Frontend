import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementFormComponent } from './core/addannouncement/announcement-form/announcement-form.component';


const routes: Routes = [
  {
    path: 'annForm',
    component: AnnouncementFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
