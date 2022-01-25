import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDetailComponent } from './post-detail.component';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.post = {
      author: 'Guest',
      content: 'Sample Post',
      counterComments: 5,
      description: 'description of Sample Post',
      id: 15,
      publish_date: new Date('2022-01-25'),
      slug: 'post_15',
      title: 'Post number 15'
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
