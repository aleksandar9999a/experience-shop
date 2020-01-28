import { Component, OnInit } from '@angular/core';
import { AuthenticationFormAnimations } from './authentication-form.animations';
import { AuthenticationFormService } from '../services/authentication-form.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css'],
  animations: [AuthenticationFormAnimations]
})
export class AuthenticationFormComponent implements OnInit {
  formState = 'close';
  loginState = 'open';
  registeredState = 'close';
  moveToLogInBtn = true;
  moveToRegBtn = false;

  constructor(
    private authenticationFormService: AuthenticationFormService
  ) { }

  moveToLogIn() {
    this.loginState = 'open';
    this.registeredState = 'close';
    this.moveToLogInBtn = true;
    this.moveToRegBtn = false;
  }

  moveToRegistered() {
    this.loginState = 'close';
    this.registeredState = 'open';
    this.moveToLogInBtn = false;
    this.moveToRegBtn = true;
  }

  closeSignForm() {
    this.authenticationFormService.toggle();
  }

  setFormState(isOpen: boolean) {
    isOpen
      ? this.formState = 'open'
      : this.formState = 'close';
  }

  ngOnInit() {
    this.authenticationFormService.changeFormState.subscribe(this.setFormState.bind(this));
  }

}
