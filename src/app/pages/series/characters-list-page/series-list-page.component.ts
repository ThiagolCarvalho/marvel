import {Component, OnInit} from '@angular/core';
import {SeriesWS} from "../../../shared/ws/series-ws";

@Component({
  selector: 'app-series',
  templateUrl: './series-list-page.component.html',
  styleUrls: ['./series-list-page.component.css']
})
export class SeriesListPageComponent implements OnInit {

  series: any;

  constructor(private seriesWS: SeriesWS) { }

  ngOnInit(): void {
    this.getSeriesList()
  }

  private getSeriesList() {
    this.seriesWS.getList().subscribe(value => {
      this.series = value.data.results;
    });
  }

}
