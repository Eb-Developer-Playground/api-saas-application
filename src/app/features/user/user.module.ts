import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserAccountManagementRoutingModule } from './user-routing';
import { ProfileComponent } from './profile/profile.component';
import { UserApiKeysComponent } from './user-apikeys/user-api-keys.component';
import { BillingComponent } from './billing/billing.component';
import { SubscribedApisComponent } from './subscribed-apis/subscribed-apis.component';

@NgModule({
  imports: [
    CommonModule,
    UserAccountManagementRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    UserApiKeysComponent,
    BillingComponent,
    SubscribedApisComponent
  ],
})
export class UserModule { }
