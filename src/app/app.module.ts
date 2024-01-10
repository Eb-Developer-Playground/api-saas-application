
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { APICatalogueModule } from './features/api-catalogue/api-catalogue.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
    // AuthenticationModule,
    // APICatalogueModule,
    // DashboardModule,
    // PagesModule,

    
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
