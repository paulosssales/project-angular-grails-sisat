import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressoraPesquisaComponent } from './impressora-pesquisa.component';

describe('ImpressoraPesquisaComponent', () => {
  let component: ImpressoraPesquisaComponent;
  let fixture: ComponentFixture<ImpressoraPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressoraPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressoraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
