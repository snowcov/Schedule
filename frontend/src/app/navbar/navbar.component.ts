import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.querySelector('body');
    const navbar = document.querySelector('.navbar');
    if (this.isDarkMode) {
      navbar?.classList.add('dark-mode');
      body?.classList.add('dark-mode');
    } else {
      navbar?.classList.remove('dark-mode');
      body?.classList.remove('dark-mode');
    }
  }
}
