import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerDespachoGridComponent } from './toner-despacho-grid.component';

describe('TonerDespachoGridComponent', () => {
  let component: TonerDespachoGridComponent;
  let fixture: ComponentFixture<TonerDespachoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerDespachoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerDespachoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
