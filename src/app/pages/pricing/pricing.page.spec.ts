import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule
import { PricingPage } from './pricing.page';

describe('PricingPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingPage],
      imports: [RouterTestingModule], // Include RouterTestingModule here
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PricingPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Add other tests as needed for the AppComponent
});