import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import * as announcementsJson from '../../../db.json'

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements: Announcement[] = announcementsJson.Announcements as Announcement[];

  constructor(private _httpService: HttpClient) { }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }
}