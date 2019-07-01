import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaoGridComponent } from './orgao-grid.component';

describe('OrgaoGridComponent', () => {
  let component: OrgaoGridComponent;
  let fixture: ComponentFixture<OrgaoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgaoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgaoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
