/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableSubscribedApiCostComponent } from './table-subscribed-api-cost.component';

describe('TableSubscribedApiCostComponent', () => {
  let component: TableSubscribedApiCostComponent;
  let fixture: ComponentFixture<TableSubscribedApiCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSubscribedApiCostComponent ]
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
