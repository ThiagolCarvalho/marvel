import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SeriesListPageComponent} from "./series-list-page/series-list-page.component";
import {SeriesListRoutingModule} from "./series-list-routing.module";
import {SeriesWS} from "../../shared/ws/series-ws";
import {SeriesListFiltersComponent} from "./series-list-filters/series-list-filters.component";

@NgModule({
  declarations: [
    SeriesListPageComponent,
    SeriesListFiltersComponent
  ],
  imports: [
    CommonModule,
    SeriesListRoutingModule
  ],
  providers: [SeriesWS]
})
export class SeriesModule { }
