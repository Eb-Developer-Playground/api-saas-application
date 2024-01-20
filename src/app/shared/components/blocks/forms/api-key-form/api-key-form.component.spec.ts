import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Import MatDialogModule and related dependencies

import { ApiKeyFormComponent } from './api-key-form.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { ApiKeyService } from 'src/app/services';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ApiKeyFormComponent', () => {
  let component: ApiKeyFormComponent;
  let fixture: ComponentFixture<ApiKeyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiKeyFormComponent],
      imports: [MatDialogModule, SharedModule], // Import MatDialogModule
      providers: [
        ApiKeyService,
        Router,
        Clipboard,
        { provide: MatDialogRef, useValue: {} }, // Provide a mock MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} } // Provide mock data if needed
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
