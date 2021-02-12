import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-new-user-table',
  templateUrl: './new-user-table.component.html',
  styleUrls: ['./new-user-table.component.scss']
})
export class NewUserTableComponent implements OnInit {

  displayedColumns: string[] = ['username', 'company'];
  dataSource = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAll().subscribe(res => this.dataSource = new MatTableDataSource(res.filter(x => x.approved != true)));
  }

  approveUser(id: number){
    this.userService.approve(id).subscribe(res => this.userService.getAll().subscribe(res => {this.dataSource = res.filter(x => x.approved != true);console.log(res)}));
  }
}
