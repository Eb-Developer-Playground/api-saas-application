/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchApiComponent } from './search-api.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

describe('SearchApiComponent', () => {
  let component: SearchApiComponent;
  let fixture: ComponentFixture<SearchApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchApiComponent ],
      imports: [MaterialModule, NgxMatSelectSearchModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
