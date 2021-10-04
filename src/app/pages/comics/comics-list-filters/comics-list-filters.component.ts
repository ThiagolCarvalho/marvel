import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {IComicFilters} from "../../../shared/models/IComicFilters";

@Component({
  selector: 'app-comics-filters',
  templateUrl: './comics-list-filters.component.html',
  styleUrls: ['./comics-list-filters.component.css']
})
export class ComicsListFiltersComponent implements OnInit {
  @Output() changeFilters = new EventEmitter<Partial<IComicFilters>>();

  private filters = {} as IComicFilters;

  constructor() { }

  ngOnInit(): void {

  }

  assignFilterValue(key: string, value: any) {
    this.filters = { ...this.filters, [key]: value.target.value};
    this.changeFilters.emit(this.filters);
  }

}
