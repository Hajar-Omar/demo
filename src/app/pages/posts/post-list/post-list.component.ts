import { PostsService } from './../../../services/posts.service';
import { IPostsData } from './../../../models/posts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  postsArrData: IPostsData[] = [];
  constructor(private PostsService: PostsService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.PostsService.getPosts().subscribe((posts) => {
      this.postsArrData = posts.data;
    });
  }
}
