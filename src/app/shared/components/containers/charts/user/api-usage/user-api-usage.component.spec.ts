import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserApiUsageComponent } from './user-api-usage.component';
import { MaterialModule } from 'src/app/shared/material.module';

describe('UserApiUsageComponent', () => {
  let component: UserApiUsageComponent;
  let fixture: ComponentFixture<UserApiUsageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserApiUsageComponent],
      imports: [
        MaterialModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApiUsageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createChart for each canvas when authenticated', () => {
    const createChartSpy = spyOn(component, 'createChart');

    component.isAuthenticated = true;
    fixture.detectChanges();

    expect(createChartSpy).toHaveBeenCalledTimes(4);
    expect(createChartSpy.calls.allArgs()).toEqual([
      [component.chart1Canvas, 'Request Count (Requests)', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)', component.apiUsagePerApi.map(entry => entry.requestCount)],
      [component.chart2Canvas, 'Traffic Volume (MB)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)', component.apiUsagePerApi.map(entry => entry.trafficVolume)],
      [component.chart3Canvas, 'Response Time (ms)', 'rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 1)', component.apiUsagePerApi.map(entry => entry.responseTime)],
      [component.chart4Canvas, 'Error Rates (%)', 'rgba(255, 69, 0, 0.2)', 'rgba(255, 69, 0, 1)', component.apiUsagePerApi.map(entry => entry.errorRate)],
    ]);
  });

  it('should not call createChart when not authenticated', () => {
    const createChartSpy = spyOn(component, 'createChart');

    component.isAuthenticated = false;
    fixture.detectChanges();

    expect(createChartSpy).not.toHaveBeenCalled();
  });
});
