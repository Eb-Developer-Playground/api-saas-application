import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserApiUsageComponent } from './user-api-usage.component';

import { HttpClientModule } from '@angular/common/http';
import { apiCatalogueDummyData, apiUsageDummyData } from 'src/app/data';

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('UserApiUsageComponent', () => {
  let component: UserApiUsageComponent;
  let fixture: ComponentFixture<UserApiUsageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserApiUsageComponent],
      imports: [HttpClientModule, SharedModule],
    });

    fixture = TestBed.createComponent(UserApiUsageComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should have default values set', () => {
  //   expect(component.overallApiUsage).toBeUndefined();
  //   expect(component.apiUsagePerUser).toBeUndefined();
  //   expect(component.apiUsagePerApi).toEqual(apiUsageDummyData);
  //   expect(component.subscribedAPIs).toEqual(apiCatalogueDummyData);
  //   expect(component.keyMetrics).toEqual({ usageLimits: 0, remainingQuota: 0 });
  //   expect(component.isAuthenticated).toBe(true);
  //   expect(component.userId).toBe(1);
  // });

  // it('should render the grid list and cards when authenticated', () => {
  //   component.isAuthenticated = true;
  //   fixture.detectChanges();

  //   const compiled = fixture.debugElement.nativeElement;
  //   const gridListElement = compiled.querySelector('.mat-grid-list-container');
  //   const cardElements = compiled.querySelectorAll('.usage-card, .list-card');

  //   expect(gridListElement).toBeTruthy();
  //   expect(cardElements.length).toBe(4);
  // });

  // it('should not render the grid list when not authenticated', () => {
  //   component.isAuthenticated = false;
  //   fixture.detectChanges();

  //   const compiled = fixture.debugElement.nativeElement;
  //   const gridListElement = compiled.querySelector('.mat-grid-list-container');
  //   const cardElements = compiled.querySelectorAll('.usage-card, .list-card');

  //   expect(gridListElement).toBeFalsy();
  //   expect(cardElements.length).toBe(0);
  // });

  // it('should call createChart method for each chart canvas on ngAfterViewInit', () => {
  //   jest.spyOn(component, 'createChart');
    
  //   component.ngAfterViewInit();

  //   expect(component.createChart).toHaveBeenCalledTimes(4);
  //   expect(component.createChart).toHaveBeenCalledWith(component.chart1Canvas, 'Request Count (Requests)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)', jasmine.any(Array));
  //   expect(component.createChart).toHaveBeenCalledWith(component.chart2Canvas, 'Traffic Volume (MB)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)', jasmine.any(Array));
  //   expect(component.createChart).toHaveBeenCalledWith(component.chart3Canvas, 'Response Time (ms)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 1)', jasmine.any(Array));
  //   expect(component.createChart).toHaveBeenCalledWith(component.chart4Canvas, 'Error Rates (%)', 'rgba(255, 69, 0, 0.2)', 'rgba(255, 69, 0, 1)', jasmine.any(Array));
  // });


});
