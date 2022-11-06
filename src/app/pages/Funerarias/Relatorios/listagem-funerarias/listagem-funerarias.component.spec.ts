import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemFunerariasComponent } from './listagem-funerarias.component';

describe('ListagemFunerariasComponent', () => {
  let component: ListagemFunerariasComponent;
  let fixture: ComponentFixture<ListagemFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemFunerariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
