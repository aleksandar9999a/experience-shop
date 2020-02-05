import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataEditComponent } from './user-data-edit.component';

describe('UserDataEditComponent', () => {
  let component: UserDataEditComponent;
  let fixture: ComponentFixture<UserDataEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
