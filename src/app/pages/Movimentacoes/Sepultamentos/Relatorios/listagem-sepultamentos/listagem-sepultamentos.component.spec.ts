import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSepultamentosComponent } from './listagem-sepultamentos.component';

describe('ListagemSepultamentosComponent', () => {
  let component: ListagemSepultamentosComponent;
  let fixture: ComponentFixture<ListagemSepultamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemSepultamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemSepultamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
