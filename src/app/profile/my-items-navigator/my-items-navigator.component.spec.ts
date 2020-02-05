import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyItemsNavigatorComponent } from './my-items-navigator.component';

describe('MyItemsNavigatorComponent', () => {
  let component: MyItemsNavigatorComponent;
  let fixture: ComponentFixture<MyItemsNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyItemsNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyItemsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
