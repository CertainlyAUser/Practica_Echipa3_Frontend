import { Component, OnInit } from '@angular/core';
import { User } from '../../../_user_model/user';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent implements OnInit {
  public users: User[];

  constructor() { }

  ngOnInit() {
  }

}
