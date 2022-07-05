import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCemiteriosComponent } from './list-cemiterios.component';

describe('ListCemiteriosComponent', () => {
  let component: ListCemiteriosComponent;
  let fixture: ComponentFixture<ListCemiteriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCemiteriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCemiteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
