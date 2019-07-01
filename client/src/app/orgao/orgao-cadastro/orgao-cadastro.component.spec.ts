import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaoCadastroComponent } from './orgao-cadastro.component';

describe('OrgaoCadastroComponent', () => {
  let component: OrgaoCadastroComponent;
  let fixture: ComponentFixture<OrgaoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgaoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
