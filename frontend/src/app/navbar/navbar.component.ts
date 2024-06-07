import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="navbar-brand">GameTime</div>
      <ul class="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button class="toggle-darkmode" (click)="toggleDarkMode()">Toggle Dark Mode</button>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const navbar = document.querySelector('.navbar');
    if (this.isDarkMode) {
      navbar?.classList.add('dark-mode');
    } else {
      navbar?.classList.remove('dark-mode');
    }
  }
}
