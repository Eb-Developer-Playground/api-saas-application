// pages.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPage } from './landing/landing.page';
import { LoginPage } from '../features/authentication/login/login.page';
import { RegisterPage } from '../features/authentication/register/register.page';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing.module';


@NgModule({
  declarations: [
    LandingPage
  

  ],
  exports: [
    LandingPage

  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
