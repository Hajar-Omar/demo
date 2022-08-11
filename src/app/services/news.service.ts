import { IArticleRes } from './../news';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient: HttpClient) { }
  getNews(country: string): Observable<IArticleRes> {
    return this._HttpClient.get<IArticleRes>(`${environment.baseUrlNewsApi}?country=${country}&apiKey=${environment.newsId}`);
  }
}
