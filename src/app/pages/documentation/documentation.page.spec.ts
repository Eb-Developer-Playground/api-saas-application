/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocumentationPage } from './documentation.page';

describe('DocumentationPage', () => {
  let component: DocumentationPage;
  let fixture: ComponentFixture<DocumentationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentationPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
