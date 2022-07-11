import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVisibleComponent } from './filter-visible.component';

describe('FilterVisibleComponent', () => {
  let component: FilterVisibleComponent;
  let fixture: ComponentFixture<FilterVisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterVisibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
