/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubscribedApiCostComponent } from './table-subscribed-api-cost.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TableSubscribedApiCostComponent', () => {
  let component: TableSubscribedApiCostComponent;
  let fixture: ComponentFixture<TableSubscribedApiCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSubscribedApiCostComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSubscribedApiCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
