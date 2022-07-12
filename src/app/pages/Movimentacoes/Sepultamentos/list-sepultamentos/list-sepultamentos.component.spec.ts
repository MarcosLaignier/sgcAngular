import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSepultamentosComponent } from './list-sepultamentos.component';

describe('ListSepultamentosComponent', () => {
  let component: ListSepultamentosComponent;
  let fixture: ComponentFixture<ListSepultamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSepultamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSepultamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
