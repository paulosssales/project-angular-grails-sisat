import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteCadastroComponent } from './solicitante-cadastro.component';

describe('SolicitanteCadastroComponent', () => {
  let component: SolicitanteCadastroComponent;
  let fixture: ComponentFixture<SolicitanteCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitanteCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitanteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
