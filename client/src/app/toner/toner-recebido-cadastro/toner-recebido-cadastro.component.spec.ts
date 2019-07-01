import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerRecebidoCadastroComponent } from './toner-recebido-cadastro.component';

describe('TonerRecebidoCadastroComponent', () => {
  let component: TonerRecebidoCadastroComponent;
  let fixture: ComponentFixture<TonerRecebidoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerRecebidoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerRecebidoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
