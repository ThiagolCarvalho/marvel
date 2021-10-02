import {Injectable} from '@angular/core';
import {BaseWS} from './base-ws';
import {HttpClient} from '@angular/common/http';
import {ISerie} from '../models/ISerie';

@Injectable()
export class SeriesWS extends BaseWS<ISerie> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'series');
  }
}
