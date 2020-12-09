import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementListComponent } from '../app/components/announcement-list/announcement-list.component';


const routes: Routes = [
  { path: 'announcements', component: AnnouncementListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
