import {Component, OnInit, Input, Injectable, Injector} from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import {ActivatedRoute} from '@angular/router';
import {AnnouncementService} from '../../services/announcement.service';

@Component({
    selector: 'app-announcement-details',
    templateUrl: './announcement-details.component.html',
    styleUrls: ['./announcement-details.component.css']
})
@Injectable({ providedIn: 'root'})
export class AnnouncementDetailsComponent implements OnInit {

    announcement: Announcement;

    constructor(private route: ActivatedRoute, private announcementService: AnnouncementService) {
    }

    ngOnInit() {
        this.announcement = this.getAnnouncement();
    }

    getAnnouncement(): Announcement {
        const id = +this.route.snapshot.paramMap.get('id');
        return this.announcementService.getAnnouncementById(id);
    }
}
