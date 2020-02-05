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
import { ItemsListComponent } from './items-list/items-list.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShipmentsComponent } from './shipments/shipments.component';
import { OrdersComponent } from './orders/orders.component';
import { ShipmentsService } from './services/shipments.service';
import { ShipmentItemComponent } from './shipment-item/shipment-item.component';
import { OrdersService } from './services/orders.service';


@NgModule({
  declarations: [
    UserInfoComponent,
    ProfileComponent,
    MyItemsComponent,
    UserDataEditComponent,
    MyItemsListComponent,
    MyItemsNavigatorComponent,
    ItemsListComponent,
    ProfileNavigationComponent,
    ShipmentsComponent,
    OrdersComponent,
    ShipmentItemComponent
  ],
  providers: [UserDataEditService, MyItemsService, UserInfoService, ShipmentsService, OrdersService],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [ProfileComponent, UserDataEditComponent]
})
export class ProfileModule { }
