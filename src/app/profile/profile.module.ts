import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { UserInfoModule } from './user-info/user-info.module';
import { ItemsCardModule } from './items-card/items-card.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserInfoModule,
    ItemsCardModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
