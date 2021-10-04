import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'characters', loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)},
  { path: 'series', loadChildren: () => import('./pages/series/series.module').then(m => m.SeriesModule)},
  { path: 'comics', loadChildren: () => import('./pages/comics/comics.module').then(m => m.ComicsModule)},
  { path: '', redirectTo: '/characters', pathMatch: 'full'},
  { path: '**', redirectTo: '/characters'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
