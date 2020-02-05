import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';
import { UserDataEditService } from './services/user-data-edit.service';
import { UserDataEditComponent } from './user-data-edit/user-data-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoService } from './services/user-info.service';
import { ItemsListComponent } from './items-list/items-list.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './services/orders.service';
import { MyItemsModule } from './my-items/my-items.module';
import { ShipmentsModule } from './shipments/shipments.module';


@NgModule({
  declarations: [
    UserInfoComponent,
    ProfileComponent,
    UserDataEditComponent,
    ItemsListComponent,
    ProfileNavigationComponent,
    OrdersComponent
  ],
  providers: [UserDataEditService, UserInfoService, OrdersService],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MyItemsModule,
    ShipmentsModule
  ],
  exports: [ProfileComponent, UserDataEditComponent]
})
export class ProfileModule { }
