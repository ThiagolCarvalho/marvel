import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ComicsListPageComponent} from "./comics-list-page/comics-list-page.component";
import {ComicsListRoutingModule} from "./comics-list-routing.module";
import {ComicsWS} from "../../shared/ws/comics-ws";
import {ComicsListFiltersComponent} from "./comics-list-filters/comics-list-filters.component";
import {PaginatorModule} from "../../shared/components/paginator/paginator.module";

@NgModule({
  declarations: [
    ComicsListPageComponent,
    ComicsListFiltersComponent
  ],
  imports: [
    CommonModule,
    ComicsListRoutingModule,
    PaginatorModule
  ],
  providers: [ComicsWS]
})
export class ComicsModule { }
