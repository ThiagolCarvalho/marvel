import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() totalElements?: number = 0;
  @Input() pageSizeLimit: number = 24;
  @Input() currentPage: number = 1;
  @Output() changePage = new EventEmitter<Partial<number>>();

  constructor() { }

  ngOnInit(): void {
  }

  forwardPage() {
    this.currentPage += 1;
    this.changePage.emit(this.currentPage);
  }

  backPage() {
    this.currentPage -= 1;
    this.changePage.emit(this.currentPage);
  }

  maxPage() {
    if (this.totalElements) {
      return this.totalElements / this.pageSizeLimit
    }
    return 1;
  }

}
