import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRelatoriosComponent } from './crud-relatorios.component';

describe('CrudRelatoriosComponent', () => {
  let component: CrudRelatoriosComponent;
  let fixture: ComponentFixture<CrudRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRelatoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
