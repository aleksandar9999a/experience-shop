import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


function passwordsMatch(c: AbstractControl) {
  return c.value.password === c.value.confirmPassword ? null : { passwordsMatch: true };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private readonly notifier: NotifierService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwords: fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      }, { validators: [passwordsMatch] })
    });
  }

  get email() { return this.signUpForm.get('email'); }
  get passwords() { return this.signUpForm.get('passwords'); }
  get password() { return this.signUpForm.get('passwords').get('password'); }
  get confirmPassword() { return this.signUpForm.get('passwords').get('confirmPassword'); }

  async signUp() {
    if (this.password.value === this.confirmPassword.value) {
      await this.userService.createUser(this.email.value, this.password.value);
      await this.userService.updateUserData('Unknown', 'Unknown', './../../assets/images/unkItem.svg');
      this.router.navigate([{ outlets: { formsOutlet: 'profile_setup' } }]);
    } else {
      this.notifier.notify('warning', 'Confirm password is wrong!');
    }
  }

  ngOnInit() {
  }

}
