import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.sidebar');
    if (this.isDarkMode) {
      sidebar?.classList.add('dark-mode');
      body?.classList.add('dark-mode');
    } else {
      sidebar?.classList.remove('dark-mode');
      body?.classList.remove('dark-mode');
    }
  }
}
