import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUnidadesComponent } from './listagem-unidades.component';

describe('ListagemUnidadesComponent', () => {
  let component: ListagemUnidadesComponent;
  let fixture: ComponentFixture<ListagemUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
