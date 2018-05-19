import {NgModule} from '@angular/core';

import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    RouterModule,  // Necesario para poder usar routerLink en el shidebar
    CommonModule   // Necesario para usar ngFor, ngIf ...
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ]
})

export class SharedModule {}
