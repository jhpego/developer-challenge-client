import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { PagePostComponent } from 'src/app/pages/page-post/page-post.component';

describe('PagePostComponent', () => {

  let component: PagePostComponent;
  let fixture: ComponentFixture<PagePostComponent>;


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
    fixture = TestBed.createComponent(PagePostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should disable submit button", () => {
    fixture.detectChanges();
    component.formdata?.get("message")?.setValue("ce234nas");
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button.submit"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

});
