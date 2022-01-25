import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/models/Comment.model';

@Component({
  selector: 'comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {

  @Input() comment:Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
