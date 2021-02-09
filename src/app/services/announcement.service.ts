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
    this._httpService.post<any>("http://localhost:8080/descriptions", {"text":announcement.description}, {headers:headers}).subscribe(res => 
      {
        this._httpService.post<any>("http://localhost:8080/announcements",
          { 
            "companyId": 3,
            "imageId":"1129606222435976795",
            "link":announcement.link,
            "approvedForPublishing":false,
            "importance":1,
            "publishedDate":Date.now(),
            "title":announcement.title,
            "descriptionId":res.id,
            "shortDescription":announcement.shortDesc 
          }).subscribe(res2 => {
            switch(announcement.type){
              case "Internship":
                this._httpService.post("http://localhost:8080/internships",
                  {     
                    "id":res2.id,
                    "startDate":announcement.startDate,
                    "requirments":announcement.requirements,
                    "numberAvailablePositions":announcement.vacantPositions,
                    "limitDate":announcement.limitDate
                  }).subscribe(res4 => console.log(res4));
                break
              case "Job":
                this._httpService.post("http://localhost:8080/jobs",
                  {     
                    "id":res2.id,
                    "requirments":announcement.requirements,
                    "limitDate":announcement.limitDate
                  }).subscribe(res4 => console.log(res4));
                break
              case "Course":
                this._httpService.post("http://localhost:8080/courses",
                  {     
                    "id":res2.id,
                    "startDate":announcement.startDate,
                    "limitDate":announcement.limitDate
                  }).subscribe(res4 => console.log(res4));
                break
              case "Contest":
                this._httpService.post("http://localhost:8080/contests",
                  {     
                    "id":res2.id,
                    "date":announcement.date,
                    "location":announcement.location,
                    "price":announcement.price,
                    "prize":announcement.prize,
                    "limitDate":announcement.limitDate
                  }).subscribe(res4 => console.log(res4));
                break
              case "Other":
                this._httpService.post("http://localhost:8080/scholarships",
                  {     
                    "id":res2.id,
                    "requirments":announcement.requirements,
                    "noAvailablePositions":announcement.vacantPositions,
                    "limitDate":announcement.limitDate
                  }).subscribe(res4 => console.log(res4));
                break
            }
          });
      }
    );
  }
}
