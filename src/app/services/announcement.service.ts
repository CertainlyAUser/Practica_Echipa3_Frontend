import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  announcements: Announcement[] = [
    { id: 54,
    title: "Zync Software Internship 2020",
    type: "Internship",
    description: "Share your passion! Whether you are a software developer, an usability expert or a graphic designer, Zynk has a lot to offer to you. Working at Zynk is a fun and rewarding experience. Our commitment is to promote a culture based on innovation, creativity and collaboration.",
    applicationDate: "18 Martie 2020",
    beginDate: "30 Iulie 2020",
    duration: "3 luni",
    link: "http://www.zynksoftware.com/",
    requirements: "Passionate. Good understanding of OOP principles. Strong interpersonal, communication and willing to learn. Fundamentals in data structures, algorithm design.",
    vacantPositions: 4 },
    { id: 66,
      title: "IT-Labs Internship Opportunity",
      type: "Internship",
      description: "Cu pandemie sau fără, viața merge înainte! Înscrie-te la un internship care-ți va netezi drumul în carieră în cadrul organizației-mamă sau în compania în care dorești! Optează pentru internshipul care ți se potrivește în funcție de specializarea, dar și de interesele tale! Ai de ales între: C/C++.",
      applicationDate: "16 Iunie 2021",
      beginDate: "22 August 2021",
      duration: "2 luni",
      link: "https://internship.it-labs.ro",
      requirements: "",
      vacantPositions: 6 }
  ]

  constructor() { }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
}

}
