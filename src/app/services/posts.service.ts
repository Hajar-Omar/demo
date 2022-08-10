import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { IPostsRes} from "../models/posts";




  @Injectable({
    providedIn: 'root'
  })
  export class PostsService {

    constructor(private _httpClient: HttpClient) {
    }

    getPosts(): Observable<IPostsRes> {
      let id = environment.appId;
      //  https://dummyapi.io/data/v1/post
      let headers = new HttpHeaders({
        'app-id': id
      })
      return this._httpClient.get<IPostsRes>(environment.basrUrlDummy + 'post', {headers});
    }
  }
