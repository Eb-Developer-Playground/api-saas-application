
/* Core Angular  */
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

import { NavbarComponent } from '../core/navbar/navbar.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent,
        AlertComponent
    ],

    imports: [
        RouterModule,
        SharedModule

    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        AlertComponent
    ]
})
export class CoreModule { }