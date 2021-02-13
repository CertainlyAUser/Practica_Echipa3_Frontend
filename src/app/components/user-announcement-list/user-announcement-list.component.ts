import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from '../../services/announcement.service';
import { User } from '../../_user_model/user';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-user-announcement-list',
  templateUrl: './user-announcement-list.component.html',
  styleUrls: ['./user-announcement-list.component.scss']
})
export class UserAnnouncementListComponent implements OnInit {
  public announcements: Announcement[];
  public announcementsBackup: Announcement[];
  public importance: number;
  public type: string;
  public user: User;

  constructor(private announcementService: AnnouncementService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.getAnnouncements();
    /*this.announcementsBackup = this.announcements;
    this.user = this.authService.currentUserValue;

    if (this.user) {
      this.filterForUser();
    }*/
  }
  
  getAnnouncements(): void {
    this.announcementService.getCompanyId().subscribe(id => this.announcementService.getAnnouncementsByUser(id).subscribe(announcements => this.announcements = announcements));
  }

  filterForUser(): void {
    this.announcements = this.announcementsBackup;
    var userAnnouncements = this.announcements.filter(an => an.user.id == this.user.id);
    console.log(this.user);
    this.announcements = userAnnouncements;
  }
}
