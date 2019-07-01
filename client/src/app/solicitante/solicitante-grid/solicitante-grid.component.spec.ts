import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitanteGridComponent } from './solicitante-grid.component';

describe('SolicitanteGridComponent', () => {
  let component: SolicitanteGridComponent;
  let fixture: ComponentFixture<SolicitanteGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitanteGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitanteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
