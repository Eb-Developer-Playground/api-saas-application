import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule
import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material.module';

describe('LoginPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [RouterTestingModule,  HttpClientModule, MaterialModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Add other tests as needed for the AppComponent
});
