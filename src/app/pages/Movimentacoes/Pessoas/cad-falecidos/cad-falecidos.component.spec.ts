import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFalecidosComponent } from './cad-falecidos.component';

describe('CadFalecidosComponent', () => {
  let component: CadFalecidosComponent;
  let fixture: ComponentFixture<CadFalecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadFalecidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadFalecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
