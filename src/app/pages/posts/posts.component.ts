import { IPostsData } from '../../models/posts';
import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsArrData: IPostsData[] = []
  constructor(private postsService :PostsService) { }

  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts(){
    this.postsService.getPosts().subscribe((posts) => {
      this.postsArrData = posts.data;
      console.log("🚀 ~ file: posts.component.ts ~ line 21 ~ PostsComponent ~ this.postsService.getPosts ~ this.postsArrData", this.postsArrData)
    })
  }
}