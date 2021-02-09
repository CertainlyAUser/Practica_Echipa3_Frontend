import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementFormComponent } from './addannouncement/announcement-form/announcement-form.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatStepperModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditannouncementComponent } from './editannouncement/editannouncement.component';
import { NewAnnouncementTableComponent } from './page/new-announcement-table/new-announcement-table.component';

@NgModule({
  declarations: [
    AnnouncementFormComponent,
    EditannouncementComponent,
    NewAnnouncementTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    AnnouncementFormComponent,
    EditannouncementComponent
  ]
})
export class CoreModule { }
