import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifierService } from "angular-notifier";

import fire from '../config/firebase.js';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  private readonly notifier: NotifierService;

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  
  constructor(notifierService: NotifierService) { this.notifier = notifierService; }

  signIn(){
    const {email, password} = this.signInForm.value;
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.notifier.notify('success', 'Successful!');
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  ngOnInit() {
  }

}
