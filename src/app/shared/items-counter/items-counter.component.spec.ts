import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCounterComponent } from './items-counter.component';

describe('ItemsCounterComponent', () => {
  let component: ItemsCounterComponent;
  let fixture: ComponentFixture<ItemsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
