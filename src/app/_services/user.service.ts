import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/_user_model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    register(user: User) {
        return this.http.post("http://localhost:8080/users/sign-up", {"username":user.username, "password":user.password});
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}
