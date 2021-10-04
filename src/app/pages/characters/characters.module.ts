import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CharactersListPageComponent} from "./characters-list-page/characters-list-page.component";
import {CharacterWS} from "../../shared/ws/character-ws";
import {CharactersListRoutingModule} from "./characters-list-routing.module";
import {CharactersListFiltersComponent} from "./characters-list-filters/characters-list-filters.component";

@NgModule({
    declarations: [
        CharactersListPageComponent,
        CharactersListFiltersComponent
    ],
  imports: [
    CommonModule,
    CharactersListRoutingModule
  ],
  providers: [CharacterWS]
})
export class CharactersModule { }
