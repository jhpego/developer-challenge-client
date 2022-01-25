import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigatorComponent } from './navigator.component';

describe('NavigatorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        NavigatorComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavigatorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
