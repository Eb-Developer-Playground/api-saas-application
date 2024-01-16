
/* Core Angular  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { ButtonComponent } from './components/elements/button/button.component';
import { HeroComponent } from './components/containers/hero/hero.component';
import { FeaturesComponent } from './components/containers/features/features.component';
import { HelpCenterComponent } from './components/containers/help-center/help-center.component';
import { FooterComponent } from '../core/footer/footer.component';
import { SearchApiComponent } from './components/elements/search-api/search-api.component';
import { UserApiUsageComponent } from './components/containers/charts/user/api-usage/user-api-usage.component';
import { TableSubscribedApisComponent } from './components/containers/tables/user/table-subscribed-apis/table-subscribed-apis.component';
import { ApiKeyFormComponent } from './components/blocks/forms/api-key-form/api-key-form.component';
import { TableSubscribedApiCostComponent } from './components/containers/tables/user/table-subscribed-api-cost/table-subscribed-api-cost.component';


@NgModule({
    declarations: [
        ButtonComponent,
        HeroComponent,
        FeaturesComponent,
        HelpCenterComponent,
        FooterComponent,
        SearchApiComponent,
        UserApiUsageComponent,
        TableSubscribedApisComponent,
        TableSubscribedApiCostComponent,
        ApiKeyFormComponent
        // ... All other shared components, directives, pipes, etc. Tobe shared externally
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
        NgxMatSelectSearchModule

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ButtonComponent,
        HeroComponent,
        FeaturesComponent,
        HelpCenterComponent,
        FooterComponent,
        SearchApiComponent,
        UserApiUsageComponent,
        TableSubscribedApisComponent,
        TableSubscribedApiCostComponent,
        ApiKeyFormComponent
        
        // ... All other shared components, directives, pipes, etc. to be used externally
    ]
})
export class SharedModule { }