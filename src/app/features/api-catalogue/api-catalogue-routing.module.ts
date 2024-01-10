import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiCatalogueListComponent } from './api-catalogue-list/api-catalogue-list.component';


const routes: Routes = [
    { path: '', component: ApiCatalogueListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class APICatalogueRoutingModule {}
