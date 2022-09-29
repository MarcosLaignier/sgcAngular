import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePessoaComponent } from './table-pessoa.component';

describe('TablePessoaComponent', () => {
  let component: TablePessoaComponent;
  let fixture: ComponentFixture<TablePessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
