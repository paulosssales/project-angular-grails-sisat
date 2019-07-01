import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressoraCadastroComponent } from './impressora-cadastro.component';

describe('ImpressoraCadastroComponent', () => {
  let component: ImpressoraCadastroComponent;
  let fixture: ComponentFixture<ImpressoraCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressoraCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressoraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
