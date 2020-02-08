import { Component, OnInit } from '@angular/core';
import { AuthenticationFormAnimations } from './authentication-form.animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css'],
  animations: [AuthenticationFormAnimations]
})
export class AuthenticationFormComponent implements OnInit {
  loginState = 'open';
  registeredState = 'close';
  moveToLogInBtn = true;
  moveToRegBtn = false;

  constructor(
    private location: Location
  ) { }

  setLogInAndRegState(logInState: string, regState: string) {
    this.loginState = logInState;
    this.registeredState = regState;
  }

  setBtnState(logInBtn: boolean, regBtn: boolean) {
    this.moveToLogInBtn = logInBtn;
    this.moveToRegBtn = regBtn;
  }

  moveToLogIn() {
    this.setLogInAndRegState('open', 'close');
    this.setBtnState(true, false);
  }

  moveToRegistered() {
    this.setLogInAndRegState('close', 'open');
    this.setBtnState(false, true);
  }

  closeSignForm() {
    this.location.back();
  }

  ngOnInit() {
  }

}
