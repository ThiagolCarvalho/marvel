import {Component, OnInit} from '@angular/core';
import {SeriesWS} from "../../../shared/ws/series-ws";
import {ISerie} from "../../../shared/models/ISerie";
import {ISerieFilters} from "../../../shared/models/ISerieFilters";

@Component({
  selector: 'app-series',
  templateUrl: './series-list-page.component.html',
  styleUrls: ['./series-list-page.component.css']
})
export class SeriesListPageComponent implements OnInit {

  series = {} as ISerie;

  constructor(private seriesWS: SeriesWS) { }

  ngOnInit(): void {
    this.getSeriesList()
  }

  private getSeriesList() {
    this.seriesWS.getList().subscribe(value => {
      this.series = value;
    });
  }

  emitFilters(event: Partial<ISerieFilters>) {
    if (event && event.title != null && event.title != "") {
      this.seriesWS.getListByFilters(event.title).subscribe(value => {
        this.series = value;
      });
    } else {
      this.getSeriesList();
    }
  }
}
