import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerGridComponent } from './toner-grid.component';

describe('TonerGridComponent', () => {
  let component: TonerGridComponent;
  let fixture: ComponentFixture<TonerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
