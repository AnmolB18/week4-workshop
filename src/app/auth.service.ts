import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    { email: 'user1@example.com', password: 'password1', username: 'User1', birthdate: '1990-01-01', age: 34, valid: true },
    { email: 'user2@example.com', password: 'password2', username: 'User2', birthdate: '1992-02-02', age: 32, valid: true },
    { email: 'user3@example.com', password: 'password3', username: 'User3', birthdate: '1994-03-03', age: 30, valid: true }
  ];

  constructor() {}

  login(email: string, password: string): Observable<any> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      return of(user); // Return the user as an observable
    } else {
      return of(null); // Return null if user not found
    }
  }

  storeUserDetails(user: any): void {
    const userDetails = {
      username: user.username,
      birthdate: user.birthdate,
      age: user.age,
      email: user.email,
      valid: user.valid
    };
    sessionStorage.setItem('user', JSON.stringify(userDetails));
  }

  getUserDetails(): any {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    sessionStorage.removeItem('user');
  }
}
