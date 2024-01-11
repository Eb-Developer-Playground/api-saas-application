/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserBillingComponent } from './user-billing.component';

describe('UserBillingComponent', () => {
  let component: UserBillingComponent;
  let fixture: ComponentFixture<UserBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
