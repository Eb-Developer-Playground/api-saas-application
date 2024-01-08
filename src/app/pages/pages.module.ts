// pages.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPage } from './landing/landing.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';


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
    CommonModule
  ]
})
export class PagesModule { }
