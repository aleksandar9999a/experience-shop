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
import { UserInfoService } from './services/user-info.service';
import { MyItemsListComponent } from './my-items-list/my-items-list.component';
import { MyItemsNavigatorComponent } from './my-items-navigator/my-items-navigator.component';


@NgModule({
  declarations: [UserInfoComponent, ProfileComponent, MyItemsComponent, UserDataEditComponent, MyItemsListComponent, MyItemsNavigatorComponent],
  providers: [UserDataEditService, MyItemsService, UserInfoService],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProfileComponent, UserDataEditComponent]
})
export class ProfileModule { }
