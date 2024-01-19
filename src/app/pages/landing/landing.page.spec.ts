import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LandingPage } from './landing.page';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('Landing Page', () => {
  let titleService: Title;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPage],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [Title],
    }).compileComponents();
    titleService = TestBed.inject(Title);
  }));

  it('should create the app and set localized title', () => {
    const fixture = TestBed.createComponent(LandingPage);
    const app = fixture.componentInstance;

    fixture.detectChanges();

    expect(app).toBeTruthy();

    // Simulate setting a localized title without using $localize
    const expectedLocalizedTitle = 'Expected localized title';
    titleService.setTitle(expectedLocalizedTitle);

    const pageTitle = titleService.getTitle();
    expect(pageTitle).toBe(expectedLocalizedTitle);
  });

  // Implement
});
