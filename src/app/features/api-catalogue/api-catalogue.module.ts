import { ApiCatalogueListComponent } from './api-catalogue-list/api-catalogue-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APICatalogueRoutingModule } from './api-catalogue-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApiDetailComponent } from './api-detail/api-detail.component';

@NgModule({
  imports: [
    CommonModule,
    APICatalogueRoutingModule,
    SharedModule
  ],
  declarations: [
    ApiCatalogueListComponent,
    ApiDetailComponent
  ],
  exports: [
    ApiCatalogueListComponent
  ]
})
export class APICatalogueModule { }
