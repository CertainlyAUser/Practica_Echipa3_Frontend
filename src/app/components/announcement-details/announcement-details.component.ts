import { Component, OnInit, Input, Injectable, Injector } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../../services/announcement.service';
import { User } from '../../_user_model';
import { AuthenticationService } from '../../_services';

@Component({
    selector: 'app-announcement-details',
    templateUrl: './announcement-details.component.html',
    styleUrls: ['./announcement-details.component.scss']
})
@Injectable({ providedIn: 'root' })
export class AnnouncementDetailsComponent implements OnInit {
    currentUser: User;
    announcement: Announcement;

    constructor(private route: ActivatedRoute, private announcementService: AnnouncementService, private authService: AuthenticationService) {
        authService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.announcement = this.getAnnouncement();
    }

    getAnnouncement(): Announcement {
        const id = +this.route.snapshot.paramMap.get('id');
        return this.announcementService.getAnnouncementById(id);
    }
}
