import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.signInForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() { return this.signInForm.get('email'); }
  get password() { return this.signInForm.get('password'); }

  async signIn() {
    if (this.signInForm.valid) {
      this.userService.logIn(this.email.value, this.password.value);
    }
  }

  ngOnInit() {
   }

}
