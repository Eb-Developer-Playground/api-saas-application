import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPage } from './landing/landing.page';

import { AuthGuard } from '../shared/_helpers';

const routes: Routes = [
    { path: '', component: LandingPage}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
