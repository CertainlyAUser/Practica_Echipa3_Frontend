import { Component, Input, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { AuthenticationService } from 'src/app/_services';
import { User } from 'src/app/_user_model';
import { Announcement } from '../../models/announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: Announcement;
  currentUser: User;

  constructor(private authenticationService: AuthenticationService, private announcementService: AnnouncementService) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  pin() {
    this.announcementService.pinAnnouncement(this.announcement.id).subscribe();
    this.announcement.pinned = true;
  }

  unpin() {
    this.announcementService.unpinAnnouncement(this.announcement.id).subscribe();
    this.announcement.pinned = false;
  }
}
