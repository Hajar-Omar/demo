import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PostsComponent} from "./pages/posts/posts.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {PostsModule} from "./pages/posts/posts.module";
import {NotfoundModule} from "./pages/notfound/notfound.module";

// add modules here
const routes: Routes = [
      {path: 'posts', loadChildren: () => PostsModule},
      {path: 'error', loadChildren: () => NotfoundModule}
      // {path: '**', redirectTo: 'error'}
  // {path: 'posts', component:PostsComponent},
  // {path: 'error', component:NotfoundComponent},
  // {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
