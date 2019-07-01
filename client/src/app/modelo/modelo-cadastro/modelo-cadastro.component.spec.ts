import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCadastroComponent } from './modelo-cadastro.component';

describe('ModeloCadastroComponent', () => {
  let component: ModeloCadastroComponent;
  let fixture: ComponentFixture<ModeloCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
