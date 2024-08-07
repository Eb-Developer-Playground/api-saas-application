import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApiDetailComponent } from './api-detail.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApiDetailComponent', () => {
  let component: ApiDetailComponent;
  let fixture: ComponentFixture<ApiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ApiDetailComponent],
    imports: [MaterialModule, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
