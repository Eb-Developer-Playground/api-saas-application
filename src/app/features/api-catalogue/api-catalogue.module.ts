import { ApiCatalogueListComponent } from './api-catalogue-list/api-catalogue-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APICatalogueRoutingModule } from './api-catalogue-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    APICatalogueRoutingModule,
    SharedModule
  ],
  declarations: [
    ApiCatalogueListComponent
  ],
  exports: [
    ApiCatalogueListComponent
  ]
})
export class APICatalogueModule { }
