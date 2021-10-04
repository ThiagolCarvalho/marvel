import {Component, OnInit} from '@angular/core';
import {CharacterWS} from "../../../shared/ws/character-ws";
import {ICharacterFilters} from "../../../shared/models/ICharacterFilters";
import {ICharacter} from "../../../shared/models/ICharacter";

@Component({
  selector: 'app-characters',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.css']
})
export class CharactersListPageComponent implements OnInit {

  characters = {} as ICharacter;

  constructor(private characterWS: CharacterWS) { }

  ngOnInit(): void {
    this.getCharactersList()
  }

  private getCharactersList() {
    this.characterWS.getList().subscribe(value => {
      this.characters = value;
    });
  }

  emitFilters(event: Partial<ICharacterFilters>) {
    if (event && event.name != null && event.name != "") {
      this.characterWS.getListByFilters(event.name).subscribe(value => {
        this.characters = value;
      });
    } else {
      this.getCharactersList();
    }

  }

}
