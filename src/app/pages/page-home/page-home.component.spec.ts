import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHomeComponent } from './page-home.component';

describe('PageHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule, 
      ],
      declarations: [
        PageHomeComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PageHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
