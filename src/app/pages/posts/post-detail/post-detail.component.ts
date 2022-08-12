import { IPostsData } from './../../../models/posts';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  //TODO handle detail HTML
  postId = '';
  postData: IPostsData = {
    id: '60d21b4667d0d8992e610c85',
    image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
    likes: 43,
    tags: ['animal', 'dog', 'golden retriever'],
    text: 'adult Labrador retriever',
    publishDate: '2020-05-24T14:53:17.598Z',
    owner: {
      id: '60d0fe4f5311236168a109ca',
      title: 'ms',
      firstName: 'Sara',
      lastName: 'Andersen',
      picture: 'https://randomuser.me/api/portraits/women/58.jpg',
    },
  };
  constructor(
    private PostsService: PostsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = this._route.snapshot.params['id'];
    this.loadPost(this.postId);

    
    // make sure to handle id change on the same component
    this._route.params.subscribe((params: Params) => {
      this.postId = params['id'];
    });
  }
  loadPost(postId: string) {
    this.PostsService.getPost(postId).subscribe((post) => {
      this.postData = post;
      // console.log("🚀 ~ file: post-detail.component.ts ~ line 47 ~ PostDetailComponent ~ this.PostsService.getPost ~  this.postData",  this.postData)
    });
  }
}
