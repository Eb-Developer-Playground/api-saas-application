import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { NavbarComponent } from './navbar.component';
import { SidebarService } from '../sidebar/sidebar.service';
import { AccountService, CacheService } from 'src/app/services';
import { User } from 'src/app/models';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let sidebarService: SidebarService;
  let router: Router;
  let cacheService: CacheService;
  let accountService: AccountService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule, SharedModule],
      providers: [
        SidebarService,
        AccountService,
        CacheService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

    // Injecting services
    sidebarService = TestBed.inject(SidebarService);
    router = TestBed.inject(Router);
    cacheService = TestBed.inject(CacheService);
    accountService = TestBed.inject(AccountService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have initial state', () => {
  //   expect(component.hideMenuButtonRoutes).toEqual(['/', '/login', '/register']);
  //   expect(component.isLoggedin).toBeFalsy();
  //   expect(component.user).toBeUndefined();
  // });

  // it('should set isLoggedin to true if user is present in cache on ngOnInit', async () => {
  //   const user: User = { id: '1', username: 'test', email: 'test@example.com', firstName: 'john', lastName: 'doe', password: '#$222' };
  //   jest.spyOn(cacheService, 'get').mockReturnValue(Promise.resolve(user));

  //   await component.ngOnInit();

  //   expect(component.isLoggedin).toBeTruthy();
  //   expect(component.user).toEqual(user);
  // });

  // it('should set isLoggedin to false if user is not present in cache on ngOnInit', async () => {
  //   jest.spyOn(cacheService, 'get').mockReturnValue(null);

  //   await component.ngOnInit();

  //   expect(component.isLoggedin).toBeFalsy();
  //   expect(component.user).toBeNull();
  // });

  // it('should return true from shouldShowMenuButton when the current route is not in hideMenuButtonRoutes', () => {
  //   jest.spyOn(router, 'url', 'get').mockReturnValue('/dashboard');

  //   const result = component.shouldShowMenuButton();

  //   expect(result).toBeTruthy();
  // });

  // it('should return false from shouldShowMenuButton when the current route is in hideMenuButtonRoutes', () => {
  //   jest.spyOn(router, 'url', 'get').mockReturnValue('/login');

  //   const result = component.shouldShowMenuButton();

  //   expect(result).toBeFalsy();
  // });

  // Commenting out to troubleshoot the initial issue
  // it('should call toggleSidebar from toggleSidebar method', () => {
  //   jest.spyOn(sidebarService, 'toggleSidebar');

  //   component.toggleSidebar();

  //   expect(sidebarService.toggleSidebar).toHaveBeenCalled();
  // });
});
