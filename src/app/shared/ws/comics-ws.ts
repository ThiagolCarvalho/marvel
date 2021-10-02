import {Injectable} from '@angular/core';
import {BaseWS} from './base-ws';
import {HttpClient} from '@angular/common/http';
import {IComic} from "../models/IComic";

@Injectable()
export class ComicsWS extends BaseWS<IComic> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'comics');
  }
}
