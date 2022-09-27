import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFunerariasComponent } from './table-funerarias.component';

describe('TableFunerariasComponent', () => {
  let component: TableFunerariasComponent;
  let fixture: ComponentFixture<TableFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFunerariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
