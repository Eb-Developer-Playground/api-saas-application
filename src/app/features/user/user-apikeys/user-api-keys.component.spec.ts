/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserApiKeysComponent } from './user-api-keys.component';

describe('UserApiKeysComponent', () => {
  let component: UserApiKeysComponent;
  let fixture: ComponentFixture<UserApiKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApiKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApiKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
