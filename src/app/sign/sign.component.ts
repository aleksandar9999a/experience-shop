import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifierService } from "angular-notifier";
import { SignFormService } from '../services/signForm.service';
import { signAnimations } from './signAnimations';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  animations: signAnimations
})
export class SignComponent implements OnInit {
  formState: string = 'close';

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  constructor(
    private readonly notifier: NotifierService, 
    private routerService: Router, 
    private signFormService: SignFormService,
    private userService: UserService
    ) { }

  signIn() {
    const { email, password } = this.signInForm.value;
    this.userService.logIn(email, password)
      .then(_ => {
        this.closeSignForm();
        this.notifier.notify('success', 'Successful!');
        this.routerService.navigate(['/catalog'])
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  signUp() {
    const { email, password, confirmPassword } = this.signUpForm.value;
    if (password === confirmPassword) {
      this.userService.createUser(email, password)
      .then(_ => {
        this.closeSignForm();
        this.notifier.notify('success', 'Successful!');
        this.routerService.navigate(['/catalog'])
      })
      .catch(err => this.notifier.notify('warning', err.message));
    } else {
      this.notifier.notify('warning', 'Confirm password is wrong!');
    }
  }

  closeSignForm() {
    this.signFormService.toggle();
  }

  ngOnInit() {
    this.signFormService.change.subscribe(isOpen => isOpen ? this.formState = 'open' : this.formState = 'close')
  }

}
