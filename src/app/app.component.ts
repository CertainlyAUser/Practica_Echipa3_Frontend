import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_user_model';

import './_content/app.less';

// tslint:disable-next-line:component-selector
@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.scss'] })
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  toggle() {
    if (this.router.url === '/landing-page' || this.router.url === '/') {
      return  1;
    } else if (this.router.url === '/home') {
      return  0;
    } else {
      return  2;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/landing-page']);
  }
}
