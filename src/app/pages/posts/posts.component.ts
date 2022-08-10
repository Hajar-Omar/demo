import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPosts} from "../../models/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
postsArr : IPosts[] = []
  constructor(private postsService :PostsService) { }

  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts(){
    this.postsService.getPosts().subscribe((posts)=>{
      this.postsArr = posts.data;
    })
  }
}
