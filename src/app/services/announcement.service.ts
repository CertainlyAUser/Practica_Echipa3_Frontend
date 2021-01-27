import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import * as announcementsJson from '../../../db.json';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements: Announcement[] = announcementsJson.Announcements as Announcement[];

  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }

  getAnnouncementById(id: number): Announcement {
    return this.announcements.find(c => c.id === id);
  }

  saveImager(file: File){
    var formData = new FormData();
    formData.append("announcement", file)
    this._httpService.post("http://localhost:8080/image/save", formData).subscribe(
      (val) => {
        console.log("POST call successful value returned in body", val);
      });
  }
}
