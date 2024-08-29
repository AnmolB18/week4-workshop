import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  birthdate: string = '';
  age: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve user data from session storage
    const userData = sessionStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.username = user.username;
      this.birthdate = user.birthdate;
      this.age = user.age;
    } else {
      // Redirect to login if no user data is found
      this.router.navigate(['/profile']);
    }
  }

  saveProfile(): void {
    // Save the form values back to session storage
    const user = {
      username: this.username,
      birthdate: this.birthdate,
      age: this.age
    };
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    alert('Profile updated successfully!');

    console.log('Navigating to account page');
    this.router.navigate(['/account']).then(success => {
      if (success) {
        console.log('Navigation successful');
      } else {
        console.log('Navigation failed');
      }
    });
  }

  onSubmit(): void {
    // Handle form submission
    this.saveProfile();
  }
}
