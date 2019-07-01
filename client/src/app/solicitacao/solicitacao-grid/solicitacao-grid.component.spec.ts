import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoGridComponent } from './solicitacao-grid.component';

describe('SolicitacaoGridComponent', () => {
  let component: SolicitacaoGridComponent;
  let fixture: ComponentFixture<SolicitacaoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
