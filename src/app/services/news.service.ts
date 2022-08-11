import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient: HttpClient) { }
  getNews(): Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=2a8f1cd976ef43078b665c68ca3b650a');
  }
}
