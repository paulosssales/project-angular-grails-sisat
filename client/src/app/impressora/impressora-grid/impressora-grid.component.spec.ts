import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressoraGridComponent } from './impressora-grid.component';

describe('ImpressoraGridComponent', () => {
  let component: ImpressoraGridComponent;
  let fixture: ComponentFixture<ImpressoraGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressoraGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressoraGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
