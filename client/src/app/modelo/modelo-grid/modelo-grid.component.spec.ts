import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloGridComponent } from './modelo-grid.component';

describe('ModeloGridComponent', () => {
  let component: ModeloGridComponent;
  let fixture: ComponentFixture<ModeloGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
