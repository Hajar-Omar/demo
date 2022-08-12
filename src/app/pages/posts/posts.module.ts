import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts.component";
import {AppRoutingModule} from "./posts-routing.module";
import { PostCardComponent } from './post-card/post-card.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent,
    PostDetailComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostsModule { }
