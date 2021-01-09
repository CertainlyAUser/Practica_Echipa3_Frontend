import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AnnouncementFormComponent } from './core/addannouncement/announcement-form/announcement-form.component';
import { TagService } from './services/tag.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlertComponent } from './_components/alert.component';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import { UserAnnouncementListComponent } from './components/user-announcement-list/user-announcement-list.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';
import { NewUsersComponent } from './components/admin/new-users/new-users.component';
import { UserComponent } from './components/admin/new-users/user/user.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AnnouncementListComponent,
    UserAnnouncementListComponent,
    AnnouncementComponent,
    LandingPageComponent,
    AnnouncementDetailsComponent,
    NewUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  providers: [
    TagService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
