/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableSubscribedApisComponent } from './table-subscribed-apis.component';
import { MaterialModule } from 'src/app/shared/material.module';

describe('TableSubscribedApisComponent', () => {
  let component: TableSubscribedApisComponent;
  let fixture: ComponentFixture<TableSubscribedApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSubscribedApisComponent ],
      imports: [MaterialModule]
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
