import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-new-user-table',
  templateUrl: './new-user-table.component.html',
  styleUrls: ['./new-user-table.component.scss']
})
export class NewUserTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'action'];
  dataSource = null;

  constructor(private ann: AnnouncementService, private router: Router) { }

  ngOnInit() {
    this.ann.getCompanyies().subscribe( res => this.dataSource = new MatTableDataSource(res) );
  }

  goldIt(id){
    this.ann.goldIt(id).subscribe( res => {this.ann.getCompanyies().subscribe( res => this.dataSource = new MatTableDataSource(res) );} );
  }

  ungoldIt(id){
    this.ann.ungoldIt(id).subscribe( res => {this.ann.getCompanyies().subscribe( res => this.dataSource = new MatTableDataSource(res) );} );
  }
}
