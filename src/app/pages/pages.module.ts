import {NgModule} from '@angular/core';

import {ProgressComponent} from './progress/progress.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';

// Modulos
import {SharedModule} from '../shared/shared.module';
import {PAGES_ROUTES} from './pages.routes';
import {IncrementadorComponent} from "../components/incrementador/incrementador.component";
import {FormsModule} from "@angular/forms";

// ng2-charts
import  { ChartsModule } from "ng2-charts";

// Components
import { GraficodonaComponent } from "../components/graficodona/graficodona.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficodonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {}
