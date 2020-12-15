import { Component, OnInit } from '@angular/core';
import {User} from '../_user_model';
import {AuthenticationService} from '../_services';

@Component({ templateUrl: 'landing-page.component.html' })
export class LandingPageComponent implements OnInit {

    currentUser: User;



    constructor(private authService: AuthenticationService) {
        authService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
    }
}
