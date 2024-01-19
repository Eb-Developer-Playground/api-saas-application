import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar/sidebar.service';
import { AccountService, CacheService } from 'src/app/services';
import { User } from 'src/app/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hideMenuButtonRoutes = ['/', '/login', '/register'];
  isLoggedin: boolean = false;
  user!: User;
  constructor(private sidebarService: SidebarService,
              private router: Router,
              private cacheService: CacheService,
              private accountService: AccountService) {
                this.user = this.cacheService.get('user') as User;
              }

  ngOnInit() {
    if(this.user){
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  }

  shouldShowMenuButton(): boolean {
    const currentRoute = this.router.url;
    return !this.hideMenuButtonRoutes.includes(currentRoute);
  }
  
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }


}
