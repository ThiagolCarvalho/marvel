import {Injectable} from '@angular/core';
import {BaseWS} from './base-ws';
import {HttpClient} from '@angular/common/http';
import {IComic} from "../models/IComic";
import {Observable} from "rxjs";

@Injectable()
export class ComicsWS extends BaseWS<IComic> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'comics');
  }

  public getListByFilters(title?: string): Observable<IComic> {
    return this.httpClient.get<IComic>(`${this._url}?titleStartsWith=${title}&limit=60&${this.getAuthParams()}`);
  }
}
