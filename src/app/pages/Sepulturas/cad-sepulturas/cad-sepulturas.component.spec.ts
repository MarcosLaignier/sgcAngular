import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadSepulturasComponent } from './cad-sepulturas.component';

describe('CadSepulturasComponent', () => {
  let component: CadSepulturasComponent;
  let fixture: ComponentFixture<CadSepulturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadSepulturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadSepulturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
