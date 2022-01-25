import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models/Post.model';

@Component({
  selector: 'post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.scss']
})
export class PostRowComponent implements OnInit {

  @Input() post: Post;
  @Input() hideContent: boolean = false;

  ngOnInit() { }


}
