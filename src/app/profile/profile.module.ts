import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsListComponent } from './items-list/items-list.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { MyItemsModule } from './my-items/my-items.module';
import { ShipmentsModule } from './shipments/shipments.module';
import { OrdersModule } from './orders/orders.module';
import { UserInfoModule } from './user-info/user-info.module';


@NgModule({
  declarations: [
    ProfileComponent,
    ItemsListComponent,
    ProfileNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MyItemsModule,
    ShipmentsModule,
    OrdersModule,
    UserInfoModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
