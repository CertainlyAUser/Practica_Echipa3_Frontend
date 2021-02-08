import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import * as announcementsJson from '../../../db.json';
import { AuthenticationService } from '../_services';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements: Announcement[] = announcementsJson.Announcements as Announcement[];

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpClient, private auth:AuthenticationService) { }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }

  getAnnouncementById(id: number): Announcement {
    return this.announcements.find(c => c.id === id);
  }

  postAnnouncement(announcement : AnnouncementFormTemplate){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.auth.currentUserValue.token
    });
    this._httpService.post("http://localhost:8080/descriptions", {"text":announcement.description}, {headers:headers}).subscribe(res => 
      {
        console.log(res);
        this._httpService.post("http://localhost:8080/",{});
      }
    );
  }
}
