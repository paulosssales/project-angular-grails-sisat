import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerPesquisaComponent } from './toner-pesquisa.component';

describe('TonerPesquisaComponent', () => {
  let component: TonerPesquisaComponent;
  let fixture: ComponentFixture<TonerPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
