import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Import RouterOutlet for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';  // Adjust title or other properties as needed

  constructor(private router: Router) {}

  logout() {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
