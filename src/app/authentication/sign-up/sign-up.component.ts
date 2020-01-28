import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationFormService } from '../services/authentication-form.service';
import { ProfileSetUpFormService } from '../services/profile-set-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private readonly notifier: NotifierService,
    private userService: UserService
  ) { }

  signUp() {
    const { email, password, confirmPassword } = this.signUpForm.value;
    if (password === confirmPassword) {
      this.userService.createUser(email, password);
    } else {
      this.notifier.notify('warning', 'Confirm password is wrong!');
    }
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

}
