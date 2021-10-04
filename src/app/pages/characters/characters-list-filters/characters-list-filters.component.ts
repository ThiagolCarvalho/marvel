import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ICharacterFilters} from "../../../shared/models/ICharacterFilters";

@Component({
  selector: 'app-character-filters',
  templateUrl: './characters-list-filters.component.html',
  styleUrls: ['./characters-list-filters.component.css']
})
export class CharactersListFiltersComponent implements OnInit {
  @Output() changeFilters = new EventEmitter<Partial<ICharacterFilters>>();

  private filters = {} as ICharacterFilters;

  constructor() { }

  ngOnInit(): void {

  }

  assignFilterValue(key: string, value: any) {
    this.filters = { ...this.filters, [key]: value.target.value};
    this.changeFilters.emit(this.filters);
  }

}
