import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Subscription } from 'rxjs';
import { Post } from 'src/models/Post.model';
import { PostsService } from 'src/services/posts.service';

@Component({
  selector: 'page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.scss']
})
export class PagePostsComponent implements OnInit {

  public posts:any = [];

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getAll().subscribe( res => {
      this.posts = res;
    })
  }


  
}
