import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts.component";
import {AppRoutingModule} from "./posts-routing.module";
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostsModule { }
