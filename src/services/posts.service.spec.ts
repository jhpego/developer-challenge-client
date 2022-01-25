import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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
