import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboxRowComponent } from './dashbox-row.component';

describe('DashboxRowComponent', () => {
  let component: DashboxRowComponent;
  let fixture: ComponentFixture<DashboxRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboxRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboxRowComponent);
    component = fixture.componentInstance;
    component.row = {
      label: 'sample label',
      subLabel: 'sample subLabel'
    };
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
