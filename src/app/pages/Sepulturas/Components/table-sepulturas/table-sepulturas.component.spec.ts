import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSepulturasComponent } from './table-sepulturas.component';

describe('TableSepulturasComponent', () => {
  let component: TableSepulturasComponent;
  let fixture: ComponentFixture<TableSepulturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSepulturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSepulturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
