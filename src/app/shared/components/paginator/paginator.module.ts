import {NgModule} from "@angular/core";
import {PaginatorComponent} from "./paginator.component";


@NgModule({
  declarations: [
    PaginatorComponent
  ],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
