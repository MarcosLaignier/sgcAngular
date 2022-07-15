import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSepultamentosComponent } from './cad-sepultamentos.component';

describe('CadSepultamentosComponent', () => {
  let component: CadSepultamentosComponent;
  let fixture: ComponentFixture<CadSepultamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadSepultamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadSepultamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
