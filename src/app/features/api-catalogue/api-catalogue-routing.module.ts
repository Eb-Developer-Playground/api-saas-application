import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCatalogueListComponent } from './api-catalogue-list/api-catalogue-list.component';
import { ApiDetailComponent } from './api-detail/api-detail.component';


const routes: Routes = [
    { path: '', component: ApiCatalogueListComponent },
    { path: 'detail', component: ApiDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class APICatalogueRoutingModule {}
