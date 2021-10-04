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
  name: string = '';
  currentPage: number = 1;
  limit: number = 24;

  constructor(private characterWS: CharacterWS) { }

  ngOnInit(): void {
    this.getCharactersList()
  }

  private getCharactersList() {
    this.characterWS.getList((this.currentPage - 1) * this.limit).subscribe(value => {
      this.characters = value;
    });
  }

  emitFilters(event: Partial<ICharacterFilters>) {
    if (event && event.name != null && event.name != "") {
      this.name = event.name;
      this.characterWS.getListByFilters((this.currentPage - 1) * this.limit, this.name).subscribe(value => {
        this.characters = value;
        this.currentPage = 1;
      });
    } else {
      this.name = '';
      this.currentPage = 1;
      this.getCharactersList();
    }
  }

  changePage(event: Partial<number>) {
    if (event != null) {
      this.currentPage = event;
      if (this.name != '') {
        this.characterWS.getListByFilters((event - 1) * this.limit, this.name).subscribe(value => {
          this.characters = value;
        });
      } else {
        this.characterWS.getList((event - 1) * this.limit).subscribe(value => {
          this.characters = value;
        });
      }
    }
  }

}
