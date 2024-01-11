import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserApiKeysComponent } from './user-apikeys/user-api-keys.component';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'apikeys', component: UserApiKeysComponent},
    { path: 'billing', component: BillingComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserAccountManagementRoutingModule {}
