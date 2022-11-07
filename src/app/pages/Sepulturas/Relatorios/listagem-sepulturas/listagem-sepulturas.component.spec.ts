import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSepulturasComponent } from './listagem-sepulturas.component';

describe('ListagemSepulturasComponent', () => {
  let component: ListagemSepulturasComponent;
  let fixture: ComponentFixture<ListagemSepulturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemSepulturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemSepulturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
