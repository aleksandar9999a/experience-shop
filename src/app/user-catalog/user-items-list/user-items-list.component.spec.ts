import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemsListComponent } from './user-items-list.component';

describe('UserItemsListComponent', () => {
  let component: UserItemsListComponent;
  let fixture: ComponentFixture<UserItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
