import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/_user_model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        // return this.http.post<any>(`localhost:4200/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         console.log(JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }));
        console.log("A");
        // return this.http.post<any>("http://localhost:8080/login", { "username":username, "password":password }, {observe:'response'})
        //         .subscribe(res => console.log(res.headers.get("authorization").split(' ')[1]));
        return this.http.post<any>("http://localhost:8080/login", { "username":username, "password":password }, {observe:'response'})
                .pipe(map(res => {
                    console.log(res);
                    var user = new User();
                    user.token = res.headers.get("authorization").split(' ')[1];
                    console.log(user);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
