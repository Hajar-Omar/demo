import { IPostsData } from './../models/posts';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPosts } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  id = environment.appId;
  postHeaders = new HttpHeaders({
    'app-id': this.id,
  });
  baseUrlDummy = environment.baseUrlDummy;
  constructor(private _httpClient: HttpClient) {}
  getPosts(): Observable<IPosts> {
    return this._httpClient.get<IPosts>(`${this.baseUrlDummy}post`, {
      headers: this.postHeaders,
    });
  }

  getPost(postId: string): Observable<IPostsData> {
    return this._httpClient.get<IPostsData>(
      `${this.baseUrlDummy}post/${postId}`,
      {
        headers: this.postHeaders,
      }
    );
  }
}
