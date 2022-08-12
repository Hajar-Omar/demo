import { IPostsData } from './../../../models/posts';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  // TODO add pipe to handle date format
  @Input()
  postObj: IPostsData = {
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
  constructor() {}

  ngOnInit(): void {}
}
