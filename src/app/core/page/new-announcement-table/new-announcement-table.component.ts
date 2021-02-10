import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-new-announcement-table',
  templateUrl: './new-announcement-table.component.html',
  styleUrls: ['./new-announcement-table.component.scss']
})
export class NewAnnouncementTableComponent implements OnInit {
  
  displayedColumns: string[] = ['title', 'company', 'date', 'action'];
  dataSource = null;

  constructor(private ann : AnnouncementService, private router: Router) { }

  ngOnInit() {
    this.ann.getAnnouncements().subscribe(res => this.dataSource = res);
  }

  navToPage(id){
    this.router.navigate(['/announcement-details/'+id]);
  }

}
