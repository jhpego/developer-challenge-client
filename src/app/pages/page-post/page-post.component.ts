import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Subscription } from 'rxjs';
import { Post } from 'src/models/Post.model';
import { CommentsService } from 'src/services/comments.service';
import { PostsService } from 'src/services/posts.service';
import { Comment } from 'src/models/Comment.model';
// import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'posts',
  templateUrl: './page-post.component.html',
  styleUrls: ['./page-post.component.scss']
})
export class PagePostComponent {
  formdata: FormGroup;
  @Input() items: Post[] = [];

  private routeSub: Subscription;
  public postId: number;
  public post: Post;
  public comments: Comment[];
  public regexPat = /^[a-zA-Z\s]+$/;


  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private commentsService: CommentsService,
  ) { }


  ngOnInit(): void {
    combineLatest(this.route.params, this.route.queryParams)
      .pipe(map(results => {
        const output = { ...results[0], ...results[1] };
        return output;
      })).subscribe(params => {
        this.postId = params['id'];
        this.getPost();
        this.getComments();
      })
    this.formdata = new FormGroup({
      message: new FormControl("", [/*Validators.required,*/ Validators.pattern(this.regexPat)]),
      // passwd: new FormControl("abcd1234")
    });
  }

  markTouched() {
    this.formdata?.get("message")?.markAsTouched();
    this.formdata?.get("message")?.updateValueAndValidity();
  }


  getPost(): Subscription {
    return this.postService.getDetail(this.postId).subscribe(res => {
      this.post = new Post();
      this.post = res;
    })
  }

  getComments(): Subscription {
    return this.commentsService.getByPost(this.postId).subscribe(res => {
      this.comments = res;
    })
  }

  onClickSubmit(formData: any /*, event: Event*/) {
    // event.preventDefault();
    console.log(formData);
    const comment: Comment = {
      content: formData.value.message,
      user: "Guest",
      postId: this.postId,
      date: new Date(),
    }
    this.commentsService.insert(comment).subscribe(res => {
      console.log(res);
      formData.reset();
      this.getComments()
    });

  }

}
