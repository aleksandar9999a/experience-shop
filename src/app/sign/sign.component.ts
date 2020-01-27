import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { SignFormService } from '../services/signForm.service';
import { signAnimations } from './signAnimations';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  animations: signAnimations
})
export class SignComponent implements OnInit {
  formState = 'close';

  signInState = 'show';
  signUpState = 'hide';

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor(
    private readonly notifier: NotifierService,
    private signFormService: SignFormService,
    private userService: UserService
  ) { }

  moveToSignUpForm() {
    this.signInState = 'hide';
    this.signUpState = 'show';
  }

  moveToSignInForm() {
    this.signInState = 'show';
    this.signUpState = 'hide';
  }

  signIn() {
    const { email, password } = this.signInForm.value;
    this.userService.logIn(email, password);
    this.signFormService.toggle();
  }

  signUp() {
    const { email, password, confirmPassword } = this.signUpForm.value;
    if (password === confirmPassword) {
      this.userService.createUser(email, password);
      this.signFormService.toggle();
    } else {
      this.notifier.notify('warning', 'Confirm password is wrong!');
    }
  }

  closeSignForm() {
    this.signFormService.toggle();
  }

  setIsOpen(isOpen: boolean) {
    isOpen ? this.formState = 'open' : this.formState = 'close';
  }

  ngOnInit() {
    this.signFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
  }

}
