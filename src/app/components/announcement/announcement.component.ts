import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../../models/announcement';
import { AnnouncementService } from '../../services/announcement.service';

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

  public apply() {}

  public seeDetails() {}

  public modify() {}
}
