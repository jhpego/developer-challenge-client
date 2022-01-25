import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentDetailComponent } from './comment-detail.component';

describe('CommentDetailComponent', () => {
  let component: CommentDetailComponent;
  let fixture: ComponentFixture<CommentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailComponent);
    component = fixture.componentInstance;
    component.comment = {
      content: 'this is a comment',
      postId: 1,
      user: 'Guest',
      date: new Date('2022-01-25'),
      id: 15,
      // parent_id: null
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
