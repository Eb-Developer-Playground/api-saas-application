import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hideMenuButtonRoutes = ['/', '/login', '/register'];
  constructor(private sidebarService: SidebarService, private router: Router) {}

  ngOnInit() {
  }

  shouldShowMenuButton(): boolean {
    const currentRoute = this.router.url;
    return !this.hideMenuButtonRoutes.includes(currentRoute);
  }
  
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }


}
