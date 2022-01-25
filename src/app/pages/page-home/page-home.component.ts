import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardRow } from 'src/models/Shared.model';
import { CommentsService } from 'src/services/comments.service';
import { PostsService } from 'src/services/posts.service'

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
  title = 'HomePage';

  postsRecent: DashboardRow[] = [];
  postsPopular: DashboardRow[] = [];
  usersPopular: DashboardRow[] = [];
  public posts: any = [];

  constructor(
    private postService: PostsService,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.getPosts();
    this.getDashboardData();
  }

  getDashboardData() {
    this.postService.getRecent().subscribe(res1 => {
      console.log('Recent', res1);
      this.postsRecent = res1.map(currRow => {
        return {
          label: currRow.title,
          subLabel: `Published in ${currRow.publish_date}`,
          url: `/post/${currRow.id}`,
          // count: currRow._count,
        }
      })
    });
    this.postService.getPopular().subscribe(res2 => {
      this.postsPopular = res2.map(currRow => {
        return {
          label: currRow.title,
          subLabel: `With ${currRow._count} comments`,
          url: `/post/${currRow.id}`,
          count: currRow._count,
        }
      })
      console.log('Popular', res2);
    });
    this.commentsService.getTopCommenters().subscribe(res3 => {
      console.log('Commenters', res3);
      this.usersPopular = res3.map(currRow => {
        return {
          label: `${currRow.id}`,
          subLabel: `With ${currRow._count} comments`,
          count: currRow._count,
        }
      })
    });

  }

  getPosts():Subscription {
    return this.postService.getAll().subscribe(res => {
      this.posts = res;
    });
  }


}
