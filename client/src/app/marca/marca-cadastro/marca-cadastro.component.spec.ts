import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCadastroComponent } from './marca-cadastro.component';

describe('MarcaCadastroComponent', () => {
  let component: MarcaCadastroComponent;
  let fixture: ComponentFixture<MarcaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
