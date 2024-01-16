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
  showSubmenu: boolean = false;
  isShowing = true;
  popularTags: string[] = ['REST', 'GraphQL', 'Authentication', 'JavaScript', 'Node.js'];
  selectedTag: string | null = null;
  constructor(private sidebarService: SidebarService,
              private router: Router,
              private accountService: AccountService) {}

  ngOnInit() {
    this.sidebarService.toggleSidebar$.subscribe(() => {
      this.isExpanded = !this.isExpanded;
    });
  }

  // Function to handle tag filtering
  filterByTag(tag: string): void {
    this.selectedTag = tag;
    // Add your filtering logic here, e.g., fetching and displaying only APIs with the selected tag
    // You may want to update your API list based on the selected tag
    console.log(`Filtering by tag: ${tag}`);
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