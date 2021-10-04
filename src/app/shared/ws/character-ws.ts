import {Injectable} from '@angular/core';
import {BaseWS} from './base-ws';
import {ICharacter} from '../models/ICharacter';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class CharacterWS extends BaseWS<ICharacter> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, 'characters');
  }

  public getListByFilters(offset: number, name?: string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${this._url}?nameStartsWith=${name}&limit=24&offset=${offset}&${this.getAuthParams()}`);
  }
}
