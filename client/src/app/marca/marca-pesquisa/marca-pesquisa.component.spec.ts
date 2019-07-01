import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaPesquisaComponent } from './marca-pesquisa.component';

describe('MarcaPesquisaComponent', () => {
  let component: MarcaPesquisaComponent;
  let fixture: ComponentFixture<MarcaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
