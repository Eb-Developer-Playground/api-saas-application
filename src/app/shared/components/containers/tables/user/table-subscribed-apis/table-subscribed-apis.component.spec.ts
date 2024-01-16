/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableSubscribedApisComponent } from './table-subscribed-apis.component';

describe('TableSubscribedApisComponent', () => {
  let component: TableSubscribedApisComponent;
  let fixture: ComponentFixture<TableSubscribedApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSubscribedApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSubscribedApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
