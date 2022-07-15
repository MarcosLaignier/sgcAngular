import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadCemiterioComponent } from './cad-cemiterio.component';

describe('CadCemiterioComponent', () => {
  let component: CadCemiterioComponent;
  let fixture: ComponentFixture<CadCemiterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadCemiterioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadCemiterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
