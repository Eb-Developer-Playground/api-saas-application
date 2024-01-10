import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api-monetization';
  user: User | any;
  constructor(private router: Router, private accountService: AccountService) {}

  shouldShowSidebar(): boolean {
    // Get the current route
    const currentRoute = this.router.url;

    // Check if the route is one of the pages where you don't want to show the sidebar
    if (currentRoute === '/auth/login' || currentRoute === '/auth/register' || currentRoute === '/') {
      return false; // Don't show sidebar for these routes
    }

    return true; // Show sidebar for other routes
  }


  shouldShowNavbar(): boolean {
    // Get the current route
    const currentRoute = this.router.url;

    // Check if the route is one of the pages where you don't want to show the sidebar
    if (currentRoute === '/auth/login' || currentRoute === '/auth/register') {
      return false; // Don't show sidebar for these routes
    }

    return true; // Show sidebar for other routes
  }

  logout() {
    this.accountService.logout();
  }

}
