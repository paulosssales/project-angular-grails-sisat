import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerDespachoCadastroComponent } from './toner-despacho-cadastro.component';

describe('TonerDespachoCadastroComponent', () => {
  let component: TonerDespachoCadastroComponent;
  let fixture: ComponentFixture<TonerDespachoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerDespachoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerDespachoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
