import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerRecebidoGridComponent } from './toner-recebido-grid.component';

describe('TonerRecebidoGridComponent', () => {
  let component: TonerRecebidoGridComponent;
  let fixture: ComponentFixture<TonerRecebidoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerRecebidoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerRecebidoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
