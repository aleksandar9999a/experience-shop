import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { SharedModule } from '../shared/shared.module';
import { UserDataEditService } from './services/user-data-edit.service';
import { UserDataEditComponent } from './user-data-edit/user-data-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyItemsService } from './services/my-items.service';


@NgModule({
  declarations: [UserInfoComponent, ProfileComponent, MyItemsComponent, UserDataEditComponent],
  providers: [UserDataEditService, MyItemsService],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProfileComponent, UserDataEditComponent]
})
export class ProfileModule { }
