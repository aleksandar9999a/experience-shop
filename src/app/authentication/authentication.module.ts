import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileSetUpComponent } from './profile-set-up/profile-set-up.component';


@NgModule({
  declarations: [AuthenticationFormComponent, SignInComponent, SignUpComponent, ProfileSetUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AuthenticationFormComponent, ProfileSetUpComponent]
})
export class AuthenticationModule { }
