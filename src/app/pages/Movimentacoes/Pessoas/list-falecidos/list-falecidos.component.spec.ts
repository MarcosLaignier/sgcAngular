import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFalecidosComponent } from './list-falecidos.component';

describe('ListFalecidosComponent', () => {
  let component: ListFalecidosComponent;
  let fixture: ComponentFixture<ListFalecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFalecidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFalecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
