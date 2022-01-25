import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PagePostComponent } from 'src/app/pages/page-post/page-post.component';

describe('PagePostComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        PagePostComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PagePostComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
