
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JwtInterceptor } from './shared/_helpers/jwt.interceptor';
import { ErrorInterceptor, fakeBackendProvider } from './shared/_helpers';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { DashboardModule } from './features/dashboard/dashboard.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    DashboardModule,
    PagesModule,
    SharedModule
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
