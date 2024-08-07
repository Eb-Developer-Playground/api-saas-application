
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor, fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend
        fakeBackendProvider,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
