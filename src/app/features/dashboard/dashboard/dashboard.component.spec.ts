import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

HTMLCanvasElement.prototype.getContext = jest.fn();

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [SharedModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize ngOnInit', () => {
  //   const ngOnInitSpy = jest.spyOn(component, 'ngOnInit');
    
  //   // Manually call ngOnInit
  //   component.ngOnInit();

  //   expect(ngOnInitSpy).toHaveBeenCalled();
  // });

});
