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
  title: string = '';
  currentPage: number = 1;
  limit: number = 24;

  constructor(private seriesWS: SeriesWS) { }

  ngOnInit(): void {
    this.getSeriesList()
  }

  private getSeriesList() {
    this.seriesWS.getList((this.currentPage - 1) * this.limit).subscribe(value => {
      this.series = value;
    });
  }

  emitFilters(event: Partial<ISerieFilters>) {
    if (event && event.title != null && event.title != "") {
      this.title = event.title;
      this.seriesWS.getListByFilters((this.currentPage - 1) * this.limit, this.title).subscribe(value => {
        this.series = value;
        this.currentPage = 1
      });
    } else {
      this.title = '';
      this.currentPage = 1;
      this.getSeriesList();
    }
  }

  changePage(event: Partial<number>) {
    if (event != null) {
      this.currentPage = event;
      if (this.title != '') {
        this.seriesWS.getListByFilters((event - 1) * this.limit, this.title).subscribe(value => {
          this.series = value;
        });
      } else {
        this.seriesWS.getList((event - 1) * this.limit).subscribe(value => {
          this.series = value;
        });
      }
    }
  }
}
