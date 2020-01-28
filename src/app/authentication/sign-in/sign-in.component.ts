import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationFormService } from '../services/authentication-form.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private userService: UserService,
    private authenticationFormService: AuthenticationFormService
  ) { }

  signIn() {
    const { email, password } = this.signInForm.value;
    this.userService.logIn(email, password);
    this.authenticationFormService.toggle();
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

}
