import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListNavigationComponent } from './user-list-navigation.component';

describe('UserListNavigationComponent', () => {
  let component: UserListNavigationComponent;
  let fixture: ComponentFixture<UserListNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
