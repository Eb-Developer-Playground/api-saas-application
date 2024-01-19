import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from './register.page';
import { MaterialModule } from 'src/app/shared/material.module';

describe('RegisterPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegisterPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
