import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Subscription } from 'rxjs';
import { Post } from 'src/models/Post.model';

@Component({
  selector: 'post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss']
})
export class PostRowComponent implements OnInit {


   

  @Input()  post? :Post;
  @Input()  hideContent :boolean = false;

  ngOnInit() {


  //   this.route.paramMap.switchMap((params: ParamMap) => {
  //     let user_id = params.get('id');

  //     return this.userService.get(user_id);
  // })
  // .subscribe(res => this.user = res); // assuming user is being returned from this.userService.get()
  }


}
