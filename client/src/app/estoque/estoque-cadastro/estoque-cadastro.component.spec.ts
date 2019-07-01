import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCadastroComponent } from './estoque-cadastro.component';

describe('EstoqueCadastroComponent', () => {
  let component: EstoqueCadastroComponent;
  let fixture: ComponentFixture<EstoqueCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
