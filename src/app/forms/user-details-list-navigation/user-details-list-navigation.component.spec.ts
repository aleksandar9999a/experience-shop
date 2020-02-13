import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsListNavigationComponent } from './user-details-list-navigation.component';

describe('UserDetailsListNavigationComponent', () => {
  let component: UserDetailsListNavigationComponent;
  let fixture: ComponentFixture<UserDetailsListNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsListNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsListNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
