import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'api-catalogue',
        loadChildren: () => import('./features/api-catalogue/api-catalogue.module').then(m => m.APICatalogueModule)
    },
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }