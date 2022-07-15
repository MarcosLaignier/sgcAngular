import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudToolbarCadComponent } from './crud-toolbar-cad.component';

describe('CrudToolbarCadComponent', () => {
  let component: CrudToolbarCadComponent;
  let fixture: ComponentFixture<CrudToolbarCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudToolbarCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudToolbarCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
