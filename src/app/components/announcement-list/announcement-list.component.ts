import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
  public announcements: Announcement[];

  constructor() { }

  ngOnInit() {
  }

  public apply() {}

  public seeDetails() {}

  public modify() {}
}
