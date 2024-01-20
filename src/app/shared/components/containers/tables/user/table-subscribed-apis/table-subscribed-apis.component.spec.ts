/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableSubscribedApisComponent } from './table-subscribed-apis.component';

describe('TableSubscribedApisComponent', () => {
  let component: TableSubscribedApisComponent;
  let fixture: ComponentFixture<TableSubscribedApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableSubscribedApisComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSubscribedApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    // Perform asynchronous tasks
    tick(); // Manually advance the virtual clock

    // Ensure changes are detected and view is updated
    fixture.detectChanges();

    expect(component).toBeTruthy();
  }));
});
