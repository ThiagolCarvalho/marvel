import {Component, OnInit} from '@angular/core';
import {ComicsWS} from "../../../shared/ws/comics-ws";
import {IComic} from "../../../shared/models/IComic";

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
    this.comicsWS.getList().subscribe(value => {
      this.comics = value;
    });
  }

}
