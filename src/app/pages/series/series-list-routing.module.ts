import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeriesListPageComponent} from './series-list-page/series-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesListRoutingModule { }
