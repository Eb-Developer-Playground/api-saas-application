import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-monetization';

  constructor(private router: Router) {}

  shouldShowSidebar(): boolean {
    // Get the current route
    const currentRoute = this.router.url;

    // Check if the route is one of the pages where you don't want to show the sidebar
    if (currentRoute === '/login' || currentRoute === '/register' || currentRoute === '/') {
      return false; // Don't show sidebar for these routes
    }

    return true; // Show sidebar for other routes
  }

}
