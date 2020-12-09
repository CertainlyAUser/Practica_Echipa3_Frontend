import { Component, OnInit, Input } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';

@Component({
    selector: 'app-announcement-details',
    templateUrl: './announcement-details.component.html',
    styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {
    @Input() announcement: Announcement;

    constructor() { }

    ngOnInit() { }
}
