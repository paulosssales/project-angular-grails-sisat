import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerRecebidoPesquisaComponent } from './toner-recebido-pesquisa.component';

describe('TonerRecebidoPesquisaComponent', () => {
  let component: TonerRecebidoPesquisaComponent;
  let fixture: ComponentFixture<TonerRecebidoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerRecebidoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerRecebidoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
