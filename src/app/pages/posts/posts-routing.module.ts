import { AuthGuard } from './../../services/auth.guard';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'list' },
      { path: 'list', component: PostListComponent },
      { path: ':id', component: PostDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
