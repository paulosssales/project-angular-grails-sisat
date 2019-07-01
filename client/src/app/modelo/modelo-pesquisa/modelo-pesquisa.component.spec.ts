import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPesquisaComponent } from './modelo-pesquisa.component';

describe('ModeloPesquisaComponent', () => {
  let component: ModeloPesquisaComponent;
  let fixture: ComponentFixture<ModeloPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
