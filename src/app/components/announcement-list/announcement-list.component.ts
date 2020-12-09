import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from '../../services/announcement.service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
  public announcements: Announcement[];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.getAnnouncements();
  }

  getAnnouncements(): void {
    this.announcementService.getAnnouncements().subscribe(announcements => this.announcements = announcements);
  }
}
