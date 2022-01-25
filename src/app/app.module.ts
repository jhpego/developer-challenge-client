import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PagePostsComponent } from './pages/page-posts/page-posts.component';
import { PagePostComponent } from './pages/page-post/page-post.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostRowComponent } from './components/post/post-row/post-row.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DashboxRowComponent } from './components/dashbox-row/dashbox-row.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PageHomeComponent,
    PagePostsComponent,
    PagePostComponent,
    CommentDetailComponent,
    PostRowComponent,
    PostDetailComponent,
    DashboxRowComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule 
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
