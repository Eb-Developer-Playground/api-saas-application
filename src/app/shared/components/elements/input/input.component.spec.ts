import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule
import { InputComponent } from './input.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material.module';

describe('InputComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [InputComponent],
    imports: [RouterTestingModule, MaterialModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InputComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Add other tests as needed for the AppComponent
});
