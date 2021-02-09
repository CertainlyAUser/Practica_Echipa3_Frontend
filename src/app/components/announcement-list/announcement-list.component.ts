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
  public announcementsBackup: Announcement[];
  public importance: number;
  public type: string;

  constructor(private announcementService: AnnouncementService) {
   }

  ngOnInit() {
    this.getAnnouncements();
    //this.announcementsBackup = this.announcements;
  }

  getAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe(announcements => {this.announcements = announcements, this.announcementsBackup = announcements; console.log(announcements)});
  }

  filter(): void {
    this.announcements = this.announcementsBackup;
    var filteredByImportance: Announcement[] = this.announcements;
    var filteredByType: Announcement[] = this.announcements;

    if (this.importance)
    {
      filteredByImportance = this.announcements.filter(an => an.importance == this.importance)
      this.announcements = filteredByImportance;
    }
    if (this.type)
    {
      filteredByType = this.announcements.filter(an => an.type == this.type)
      this.announcements = filteredByType
    }
  }
}
