import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ComicsListPageComponent} from "./comics-list-page/comics-list-page.component";
import {ComicsListRoutingModule} from "./comics-list-routing.module";
import {ComicsWS} from "../../shared/ws/comics-ws";

@NgModule({
  declarations: [
    ComicsListPageComponent
  ],
  imports: [
    CommonModule,
    ComicsListRoutingModule
  ],
  providers: [ComicsWS]
})
export class ComicsModule { }
