import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Md5} from 'ts-md5/dist/md5';
import {secret} from '../../../../secret';

export class BaseWS<T> {
  protected _url: string;
  private timestamp = new Date();

  constructor(private _httpClient: HttpClient, private url: string) {
    this._url = `https://gateway.marvel.com:443/v1/public/${url}`;
  }

  public getList(): Observable<T> {
    return this._httpClient.get<T>(`${this._url}?limit=24&${this.getAuthParams()}`);
  }

  public getAuthParams() {
    return `ts=${this.getTimestamp()}&apikey=${secret.publicKey}&hash=${this.getHash()}`;
  }

  private getHash() {
    return Md5.hashStr(this.getTimestamp() + secret.privateKey + secret.publicKey);
  }

  private getTimestamp () {
    return this.timestamp.getTime().toString();
  }

}
