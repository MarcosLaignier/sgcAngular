import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSepulturasComponent } from './list-sepulturas.component';

describe('ListSepulturasComponent', () => {
  let component: ListSepulturasComponent;
  let fixture: ComponentFixture<ListSepulturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSepulturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSepulturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
