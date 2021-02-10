import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import * as announcementsJson from '../../../db.json';
import { AuthenticationService } from '../_services';
import { AnnouncementFormTemplate } from 'src/app/model/add-announcement.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements: Announcement[] = announcementsJson.Announcements as Announcement[];
  Anno
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpClient, private auth:AuthenticationService) { }

  getAnnouncements(): Observable<Announcement[]> {
      return this._httpService.get<any>("http://localhost:8080/announcements");
  }

  getAnnouncementById(id: number): Observable<any> {
    //return this._httpService.get<Announcement[]>("http://localhost:8080/announcements/"+id).pipe(map(res => res.find(x => x.id == id)));
    return this._httpService.get<any>("http://localhost:8080/announcements/"+id);
  }

  getScholarshipById(id: number): Observable<any> {
    return this._httpService.get<any>("http://localhost:8080/scholarships/"+id);
  }
  
  getContestById(id: number): Observable<any> {
    return this._httpService.get<any>("http://localhost:8080/contests/"+id);
  }
  
  getCourseById(id: number): Observable<any> {
    return this._httpService.get<any>("http://localhost:8080/courses/"+id);
  }
  
  getInternshipById(id: number): Observable<any> {
    return this._httpService.get<any>("http://localhost:8080/internships/"+id);
  }
 
  getOtherById(id: number): Observable<any> {
    return this._httpService.get<any>("http://localhost:8080/others/"+id);
  } 

  getJobById(id: number): Observable<any> {
    return this._httpService.get<any>("http://localhost:8080/jobs/"+id);
  }

  saveImager(file: File){
    var formData = new FormData();
    formData.append("announcement", file)
    this._httpService.post("http://localhost:8080/image/save", formData).subscribe(
      (val) => {
        console.log("POST call successful value returned in body", val);
      });
  }

  postAnnouncement(announcement : AnnouncementFormTemplate, file: File){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.auth.currentUserValue.token
    });
    var formData = new FormData();
    formData.append("image", file)
    this._httpService.post<any>("http://localhost:8080/descriptions", {"text":announcement.description}, {headers:headers}).subscribe(res => 
      {
        this._httpService.post<any>("http://localhost:8080/images", formData).subscribe(res2 => {
          this._httpService.post<any>("http://localhost:8080/announcements",
            { 
              "companyId": 3,
              "imageId":res2.imageId,
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
                      "requirements":announcement.requirements,
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
                      "prizes":announcement.prize,
                      "limitDate":announcement.limitDate
                    }).subscribe(res4 => console.log(res4));
                  break
                case "ScholarShip":
                  this._httpService.post("http://localhost:8080/scholarships",
                    {     
                      "id":res2.id,
                      "requirements":announcement.requirements,
                      "noAvailablePositions":announcement.vacantPositions,
                      "limitDate":announcement.limitDate
                    }).subscribe(res4 => console.log(res4));
                  break
                case "Other":
                  this._httpService.post("http://localhost:8080/others",
                    {     
                      "id":res2.id,
                      "details":announcement.details
                    }).subscribe(res4 => console.log(res4));
                  break
              }
            });
        });
      }
    );
  }
}
