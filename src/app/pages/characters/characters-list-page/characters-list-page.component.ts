import {Component, OnInit} from '@angular/core';
import {CharacterWS} from "../../../shared/ws/character-ws";

@Component({
  selector: 'app-characters',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.css']
})
export class CharactersListPageComponent implements OnInit {

  characters: any;

  constructor(private characterWS: CharacterWS) { }

  ngOnInit(): void {
    this.getCharactersList()
  }

  private getCharactersList() {
    this.characterWS.getList().subscribe((value: any) => {
      this.characters = value.data.results;
    });
  }

}
