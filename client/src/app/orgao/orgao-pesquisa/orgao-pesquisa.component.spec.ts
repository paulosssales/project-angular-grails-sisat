import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaoPesquisaComponent } from './orgao-pesquisa.component';

describe('OrgaoPesquisaComponent', () => {
  let component: OrgaoPesquisaComponent;
  let fixture: ComponentFixture<OrgaoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgaoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgaoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
