import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoModule } from './user-info/user-info.module';
import { ItemsCardModule } from './items-card/items-card.module';
import { SharedModule } from 'src/app/shared/shared.module';


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
