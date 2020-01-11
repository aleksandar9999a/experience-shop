import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifierService } from "angular-notifier";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SignFormService } from '../services/signForm.service';

import fire from '../config/firebase.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  animations: [
    trigger('formState', [
      state('open', style({
        display: 'block',
        opacity: 1
      })),
      state('close', style({
        display: 'none',
        opacity: 0
      })),
      transition('open <=> close', animate('0.5s'))
    ])
  ]
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

  constructor(private readonly notifier: NotifierService, private routerService: Router, private signFormService: SignFormService) { }

  signIn() {
    const { email, password } = this.signInForm.value;
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.closeSignForm();
        this.notifier.notify('success', 'Successful!');
        this.routerService.navigate(['/catalog'])
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  signUp() {
    const { email, password, confirmPassword } = this.signUpForm.value;
    if (password === confirmPassword) {
      fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          this.closeSignForm();
          this.notifier.notify('success', 'Successful!');
          this.routerService.navigate(['/']);
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
    this.signFormService.change.subscribe(isOpen => {
      if (isOpen) {
        this.formState = 'open';
      }else{
        this.formState = 'close';
      }
    })
  }

}
