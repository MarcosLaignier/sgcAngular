import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFunerariasComponent } from './list-funerarias.component';

describe('ListFunerariasComponent', () => {
  let component: ListFunerariasComponent;
  let fixture: ComponentFixture<ListFunerariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFunerariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFunerariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
