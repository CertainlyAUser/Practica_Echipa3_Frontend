import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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
    this.ann.getAnnouncements().subscribe(res => this.dataSource = new MatTableDataSource(res.filter(x => x.approvedForPublishing!=true)));
  }

  navToPage(id: number){
    this.router.navigate(['/announcement-details/'+id]);
  }

  approveAnnouncment(id: number){
    this.ann.approveAnnouncment(id).subscribe(res => this.ann.getAnnouncements().subscribe(res => {this.dataSource = res.filter(x => x.approvedForPublishing!=true);console.log(res)}));
  }

}
