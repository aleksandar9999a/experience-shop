import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogItemsCounterComponent } from './catalog-items-counter.component';

describe('CatalogItemsCounterComponent', () => {
  let component: CatalogItemsCounterComponent;
  let fixture: ComponentFixture<CatalogItemsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogItemsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogItemsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
