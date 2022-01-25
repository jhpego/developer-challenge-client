import { async, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from 'src/models/Post.model';
import { firstValueFrom } from 'rxjs';

describe('Posts.Service', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [
        PostsService,
      ],
    });
    service = TestBed.inject(PostsService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});


