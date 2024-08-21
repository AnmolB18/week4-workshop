import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
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
}
