import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoPesquisaComponent } from './solicitacao-pesquisa.component';

describe('SolicitacaoPesquisaComponent', () => {
  let component: SolicitacaoPesquisaComponent;
  let fixture: ComponentFixture<SolicitacaoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
