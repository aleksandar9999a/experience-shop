import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationFormService } from './services/authentication-form.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthenticationFormComponent, SignInComponent, SignUpComponent],
  providers: [AuthenticationFormService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AuthenticationFormComponent]
})
export class AuthenticationModule { }
