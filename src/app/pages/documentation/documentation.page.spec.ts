import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule
import { DocumentationPage } from './documentation.page';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentationPage],
      imports: [RouterTestingModule], // Include RouterTestingModule here
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DocumentationPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Add other tests as needed for the AppComponent
});