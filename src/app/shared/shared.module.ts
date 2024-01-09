
/* Core Angular  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { ButtonComponent } from './components/elements/button/button.component';
import { NavbarComponent } from './components/containers/navbar/navbar.component';
import { SidebarComponent } from './components/containers/sidebar/sidebar.component';
import { HeroComponent } from './components/blocks/hero/hero.component';
import { FeaturesComponent } from './components/blocks/features/features.component';
import { HelpCenterComponent } from './components/blocks/help-center/help-center.component';
import { FooterComponent } from './components/containers/footer/footer.component';
import { AlertComponent } from './components/elements/alert/alert.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ButtonComponent,
        NavbarComponent,
        SidebarComponent,
        HeroComponent,
        FeaturesComponent,
        HelpCenterComponent,
        FooterComponent,
        AlertComponent
        // ... All other shared components, directives, pipes, etc. Tobe shared externally
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule // to use routerLink in navbar and sidebar 
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
        AlertComponent
        
        // ... All other shared components, directives, pipes, etc. to be used externally
    ]
})
export class SharedModule { }