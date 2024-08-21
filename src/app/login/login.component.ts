import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // Adjust path if necessary

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    // Use AuthService to attempt login
    this.authService.login(this.email, this.password).subscribe(
      user => {
        if (user && user.valid) {
          this.authService.storeUserDetails(user);
          this.errorMessage = ''; // Clear any previous error messages
          this.router.navigate(['/account']); // Redirect to the account page
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error => {
        console.error('Login error', error);
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    );
  }
}

