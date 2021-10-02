import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersListPageComponent} from './characters-list-page/characters-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersListPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersListRoutingModule { }
