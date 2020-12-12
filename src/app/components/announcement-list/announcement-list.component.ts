import { Component, OnInit, Input } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from '../../services/announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
  public announcements: Announcement[];
  public filteredAnnouncements: Announcement[];
  public age: string;
  public importance: number;
  public type: string;

  constructor(private announcementService: AnnouncementService) {
   }

  ngOnInit() {
    this.getAnnouncements();
    this.filteredAnnouncements = this.announcements;
  }

  getAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe(announcements => this.announcements = announcements);
  }

  filter(): void {
    this.announcements = this.filteredAnnouncements;
    var filteredByAge: Announcement[] = this.announcements;
    var filteredByImportance: Announcement[] = this.announcements;
    var filteredByType: Announcement[] = this.announcements;

    if (this.age != null) {
      //filteredByAge = this.announcements.filter(an => an.age == this.age)
    }
    if (this.importance != null)
    {
      console.log(this.importance)
      filteredByImportance = this.announcements.filter(an => an.importance == this.importance)
    }
    if (this.type != null)
    {
      console.log(this.type)
      filteredByType = filteredByImportance.filter(an => an.type == this.type)
    }
    this.announcements = filteredByType;
  }
}
