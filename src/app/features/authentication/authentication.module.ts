import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterPage } from './register/register.page';
import { LoginPage } from './login/login.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  declarations: [
    RegisterPage,
    LoginPage
  ]
})
export class AuthenticationModule { }
