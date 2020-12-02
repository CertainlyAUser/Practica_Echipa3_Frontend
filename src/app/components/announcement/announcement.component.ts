import { Component, Input, OnInit } from '@angular/core';
import { AnnouncementListComponent } from '../announcement-list/announcement-list.component';
import { Announcement } from '../../models/announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input() announcement: Announcement;

  constructor() { }

  ngOnInit() {
  }

}
