import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import { IPosts} from "../models/posts";




  @Injectable({
    providedIn: 'root',
  })
  export class PostsService {
    constructor(private _httpClient: HttpClient) {}

    getPosts(): Observable<IPosts> {
      let id = environment.appId;
      let headers = new HttpHeaders({
        'app-id': id,
      });
      return this._httpClient.get<IPosts>(environment.baseUrlDummy + 'post', {
        headers,
      });
    }
  }
