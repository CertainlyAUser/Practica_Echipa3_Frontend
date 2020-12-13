import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagComponent } from './tag/tag.component';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [
    TagListComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TagListComponent,
    TagComponent
  ]
})
export class SharedModule { }
