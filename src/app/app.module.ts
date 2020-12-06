import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementFormComponent } from './addannouncement/announcement-form/announcement-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatStepperModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
