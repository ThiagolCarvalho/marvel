import {Injectable} from '@angular/core';
import {BaseWS} from './base-ws';
import {HttpClient} from '@angular/common/http';
import {ISerie} from '../models/ISerie';
import {Observable} from "rxjs";

@Injectable()
export class SeriesWS extends BaseWS<ISerie> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'series');
  }

  public getListByFilters(offset: number, title?: string): Observable<ISerie> {
    return this.httpClient.get<ISerie>(`${this._url}?titleStartsWith=${title}&limit=24&offset=${offset}&${this.getAuthParams()}`);
  }
}
