import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressoraComponent } from './impressora.component';

describe('ImpressoraComponent', () => {
  let component: ImpressoraComponent;
  let fixture: ComponentFixture<ImpressoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
