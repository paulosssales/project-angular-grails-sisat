import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonerDespachoPesquisaComponent } from './toner-despacho-pesquisa.component';

describe('TonerDespachoPesquisaComponent', () => {
  let component: TonerDespachoPesquisaComponent;
  let fixture: ComponentFixture<TonerDespachoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonerDespachoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonerDespachoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
