import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSepultamentoComponent } from './table-sepultamento.component';

describe('TableSepultamentoComponent', () => {
  let component: TableSepultamentoComponent;
  let fixture: ComponentFixture<TableSepultamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSepultamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSepultamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
