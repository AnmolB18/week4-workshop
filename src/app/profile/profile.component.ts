import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string = '';
  birthdate: string = '';
  age: number | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const user = this.getUserDetails();
    if (!user) {
      this.router.navigate(['/login']);
      return;
    }
    this.email = user.email || '';
    this.birthdate = user.birthdate || '';
    this.age = user.age || null;
  }

  getUserDetails() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  saveDetails() {
    const updatedUser = {
      email: this.email,
      birthdate: this.birthdate,
      age: this.age,
      valid: true  // Keep valid as true for this demo
    };
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
  }
}
