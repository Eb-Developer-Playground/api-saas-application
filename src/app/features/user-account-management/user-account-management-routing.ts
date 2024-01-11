import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserApiKeysComponent } from './user-api-keys/user-api-keys.component';
import { UserBillingComponent } from './user-billing/user-billing.component';


const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'apikeys', component: UserApiKeysComponent},
    { path: 'billing', component: UserBillingComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserAccountManagementRoutingModule {}
