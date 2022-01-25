import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePostsComponent } from './pages/page-posts/page-posts.component';
import { PagePostComponent } from './pages/page-post/page-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  { path: 'posts', component: PagePostsComponent },
  { path: 'post/:id', component: PagePostComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }