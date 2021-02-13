import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnnouncementFormTemplate } from '../model/add-announcement.model';

@Injectable({
  providedIn: 'root'
})
export class EditformService {

  constructor(private http:HttpClient) { }

  getAnnouncement(id) : Observable<AnnouncementFormTemplate> {
    return this.http.get<AnnouncementFormTemplate>('http://localhost:3000/Announcements/'+id);
  }
}
