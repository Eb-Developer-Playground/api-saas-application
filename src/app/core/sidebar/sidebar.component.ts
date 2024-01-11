;
import { OnInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarService } from './sidebar.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | any;
  isExpanded = false;
  showSubmenu: boolean = true;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(private sidebarService: SidebarService,
              private router: Router,
              private accountService: AccountService) {}

  ngOnInit() {
    this.sidebarService.toggleSidebar$.subscribe(() => {
      this.isExpanded = !this.isExpanded;
    });
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }


  logout(){
    this.accountService.logout()
  }
}