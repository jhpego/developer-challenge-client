import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models/Post.model';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input() post:Post;

  constructor() { }

  
  ngOnInit(): void {
  }

}
