/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserApiUsageComponent } from './user-api-usage.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { HttpClientModule } from '@angular/common/http';

describe('ApiUsageComponent', () => {
  let component: UserApiUsageComponent;
  let fixture: ComponentFixture<UserApiUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApiUsageComponent ],
      imports: [MaterialModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApiUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
