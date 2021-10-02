import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComicsListPageComponent} from './comics-list-page/comics-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsListRoutingModule { }
