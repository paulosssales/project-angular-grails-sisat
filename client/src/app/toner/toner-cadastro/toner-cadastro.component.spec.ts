import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerCadastroComponent } from './toner-cadastro.component';

describe('TonerCadastroComponent', () => {
  let component: TonerCadastroComponent;
  let fixture: ComponentFixture<TonerCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
