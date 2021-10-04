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
  title: string = '';
  currentPage: number = 1;
  limit: number = 24;

  constructor(private comicsWS: ComicsWS) { }

  ngOnInit(): void {
    this.getSeriesList()
  }

  private getSeriesList() {
    this.comicsWS.getList((this.currentPage - 1) * this.limit).subscribe(value => {
      this.comics = value;
    });
  }

  emitFilters(event: Partial<IComicFilters>) {
    if (event && event.title != null && event.title != "") {
      this.title = event.title;
      this.comicsWS.getListByFilters((this.currentPage - 1) * this.limit, this.title).subscribe(value => {
        this.comics = value;
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
        this.comicsWS.getListByFilters((event - 1) * this.limit, this.title).subscribe(value => {
          this.comics = value;
        });
      } else {
        this.comicsWS.getList((event - 1) * this.limit).subscribe(value => {
          this.comics = value;
        });
      }
    }
  }

}
