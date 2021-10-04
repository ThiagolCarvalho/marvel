import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ISerieFilters} from "../../../shared/models/ISerieFilters";

@Component({
  selector: 'app-series-filters',
  templateUrl: './series-list-filters.component.html',
  styleUrls: ['./series-list-filters.component.css']
})
export class SeriesListFiltersComponent implements OnInit {
  @Output() changeFilters = new EventEmitter<Partial<ISerieFilters>>();

  private filters = {} as ISerieFilters;

  constructor() { }

  ngOnInit(): void {

  }

  assignFilterValue(key: string, value: any) {
    this.filters = { ...this.filters, [key]: value.target.value};
    this.changeFilters.emit(this.filters);
  }

}
