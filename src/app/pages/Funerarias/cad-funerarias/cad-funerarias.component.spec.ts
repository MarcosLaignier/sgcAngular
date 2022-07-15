import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFunerariasComponent } from './cad-funerarias.component';

describe('CadFunerariasComponent', () => {
  let component: CadFunerariasComponent;
  let fixture: ComponentFixture<CadFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadFunerariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
