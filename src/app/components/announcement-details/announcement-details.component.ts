import { Component, OnInit, Input, Injectable, Injector } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '../../services/announcement.service';
import { User } from '../../_user_model';
import { AuthenticationService } from '../../_services';
import { AnnouncementFormTemplate } from 'src/app/model/add-announcement.model';

@Component({
    selector: 'app-announcement-details',
    templateUrl: './announcement-details.component.html',
    styleUrls: ['./announcement-details.component.scss']
})
@Injectable({ providedIn: 'root' })
export class AnnouncementDetailsComponent implements OnInit {
    currentUser: User;
    announcement: AnnouncementFormTemplate;
    announcementId: number;

    constructor(private route: ActivatedRoute, private announcementService: AnnouncementService, private authService: AuthenticationService) {
        authService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.announcementId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.announcementService.getAnnouncementById(this.announcementId).subscribe(res => this.announcement = res);
    }
}
