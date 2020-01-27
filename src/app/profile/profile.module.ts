import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [UserInfoComponent, ProfileComponent, MyItemsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
