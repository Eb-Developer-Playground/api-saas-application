import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hideMenuButtonRoutes = ['/', '/login', '/register'];
  constructor(private sidebarService: SidebarService,
              private router: Router,
              private accountService: AccountService) {}

  ngOnInit() {
  }

  shouldShowMenuButton(): boolean {
    const currentRoute = this.router.url;
    return !this.hideMenuButtonRoutes.includes(currentRoute);
  }
  
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }


  isLoggedin() {
    return this.accountService.isLoggedIn();
    
  }


}
