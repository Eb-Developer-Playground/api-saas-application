import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserAccountManagementRoutingModule } from './user-account-management-routing';
import { ProfileComponent } from './profile/profile.component';
import { UserApiKeysComponent } from './user-api-keys/user-api-keys.component';
import { UserBillingComponent } from './user-billing/user-billing.component';

@NgModule({
  imports: [
    CommonModule,
    UserAccountManagementRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    UserApiKeysComponent,
    UserBillingComponent
  ]
})
export class UserAccountManagementModule { }
