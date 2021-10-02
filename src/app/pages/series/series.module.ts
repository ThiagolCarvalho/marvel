import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SeriesListPageComponent} from "./characters-list-page/series-list-page.component";
import {SeriesListRoutingModule} from "./series-list-routing.module";
import {SeriesWS} from "../../shared/ws/series-ws";

@NgModule({
  declarations: [
    SeriesListPageComponent
  ],
  imports: [
    CommonModule,
    SeriesListRoutingModule
  ],
  providers: [SeriesWS]
})
export class SeriesModule { }
