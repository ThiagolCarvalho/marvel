import {Injectable} from '@angular/core';
import {BaseWS} from './base-ws';
import {IHero} from '../models/IHero';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CharacterWS extends BaseWS<IHero> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'characters');
  }

  getByFilter() {
    // TODO
  }
}
