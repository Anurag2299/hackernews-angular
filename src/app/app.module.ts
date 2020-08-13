import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { LinechartComponent } from './linechart/linechart.component';

import { HighchartsChartModule } from 'highcharts-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import {NewsService} from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    TabledataComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
