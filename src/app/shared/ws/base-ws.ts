import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Md5} from 'ts-md5/dist/md5';
import {secret} from '../../../../secret';

export class BaseWS<T> {
  private _url: string;
  private timestamp = new Date();

  constructor(private _httpClient: HttpClient, private url: string) {
    this._url = `https://gateway.marvel.com:443/v1/public/${url}`;
  }

  public getList(): Observable<T> {
    return this._httpClient.get<T>(this._url + this.getAuthParams());
  }

  getAuthParams() {
    return `?ts=${this.getTimestamp()}&apikey=${secret.publicKey}&hash=${this.getHash()}`;
  }

  getHash() {
    return Md5.hashStr(this.getTimestamp() + secret.privateKey + secret.publicKey);
  }

  getTimestamp () {
    return this.timestamp.getTime().toString();
  }

}
