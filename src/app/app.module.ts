import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OrganizationChartModule,
    ToastModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
