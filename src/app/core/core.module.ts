import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementFormComponent } from './addannouncement/announcement-form/announcement-form.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatStepperModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EditannouncementComponent } from './editannouncement/editannouncement.component';

@NgModule({
  declarations: [
    AnnouncementFormComponent,
    EditannouncementComponent
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
  ],
  exports: [
    AnnouncementFormComponent,
    EditannouncementComponent
  ]
})
export class CoreModule { }
