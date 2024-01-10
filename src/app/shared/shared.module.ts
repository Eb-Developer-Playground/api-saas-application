
/* Core Angular  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { ButtonComponent } from './components/elements/button/button.component';
import { NavbarComponent } from './components/blocks/navbar/navbar.component';
import { SidebarComponent } from './components/blocks/sidebar/sidebar.component';
import { HeroComponent } from './components/containers/hero/hero.component';
import { FeaturesComponent } from './components/containers/features/features.component';
import { HelpCenterComponent } from './components/containers/help-center/help-center.component';
import { FooterComponent } from './components/blocks/footer/footer.component';
import { AlertComponent } from './components/elements/alert/alert.component';
import { RouterModule } from '@angular/router';
import { SearchApiComponent } from './components/elements/search-api/search-api.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        ButtonComponent,
        NavbarComponent,
        SidebarComponent,
        HeroComponent,
        FeaturesComponent,
        HelpCenterComponent,
        FooterComponent,
        AlertComponent,
        SearchApiComponent
        // ... All other shared components, directives, pipes, etc. Tobe shared externally
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule, // to use routerLinks
        NgxMatSelectSearchModule

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ButtonComponent,
        NavbarComponent,
        SidebarComponent,
        HeroComponent,
        FeaturesComponent,
        HelpCenterComponent,
        FooterComponent,
        AlertComponent,
        SearchApiComponent
        
        // ... All other shared components, directives, pipes, etc. to be used externally
    ]
})
export class SharedModule { }