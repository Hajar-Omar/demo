import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts.component";
import {AppRoutingModule} from "./posts-routing.module";

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostsModule { }
