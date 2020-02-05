import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserDataEditComponent } from './user-data-edit/user-data-edit.component';
import { UserDataEditService } from './services/user-data-edit.service';
import { UserInfoService } from './services/user-info.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserInfoComponent, UserDataEditComponent],
  providers: [UserDataEditService, UserInfoService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UserInfoComponent, UserDataEditComponent]
})
export class UserInfoModule { }
