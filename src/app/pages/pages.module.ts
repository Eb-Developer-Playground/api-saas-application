// pages.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPage } from './landing/landing.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing.module';


@NgModule({
  declarations: [
    LandingPage,
    LoginPage,
    RegisterPage,

  ],
  exports: [
    LandingPage,
    LoginPage,
    RegisterPage,

  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
