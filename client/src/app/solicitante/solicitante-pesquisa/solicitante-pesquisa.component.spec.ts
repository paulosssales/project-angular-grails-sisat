import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantePesquisaComponent } from './solicitante-pesquisa.component';

describe('SolicitantePesquisaComponent', () => {
  let component: SolicitantePesquisaComponent;
  let fixture: ComponentFixture<SolicitantePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitantePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitantePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
