import {Component, OnInit} from '@angular/core';
import {ComicsWS} from "../../../shared/ws/comics-ws";
import {IComic} from "../../../shared/models/IComic";
import {IComicFilters} from "../../../shared/models/IComicFilters";

@Component({
  selector: 'app-comics',
  templateUrl: './comics-list-page.component.html',
  styleUrls: ['./comics-list-page.component.css']
})
export class ComicsListPageComponent implements OnInit {

  comics = {} as IComic;

  constructor(private comicsWS: ComicsWS) { }

  ngOnInit(): void {
    this.getSeriesList()
  }

  private getSeriesList() {
    this.comicsWS.getList(0).subscribe(value => {
      this.comics = value;
    });
  }

  emitFilters(event: Partial<IComicFilters>) {
    if (event && event.title != null && event.title != "") {
      this.comicsWS.getListByFilters(event.title).subscribe(value => {
        this.comics = value;
      });
    } else {
      this.getSeriesList();
    }
  }

}
