import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PublicService } from './public.service';

describe('Public.Service', () => {
  let service: PublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [
        PublicService,
      ],
    });
    service = TestBed.inject(PublicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
