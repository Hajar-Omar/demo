import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsModule } from './pages/posts/posts.module';
import { NotfoundModule } from './pages/notfound/notfound.module';

// add modules here
const routes: Routes = [
  { path: 'posts', loadChildren: () => PostsModule },
  { path: 'error', loadChildren: () => NotfoundModule },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'news', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
