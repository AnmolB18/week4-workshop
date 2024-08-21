import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
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
