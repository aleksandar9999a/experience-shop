import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MyItemsComponent } from './my-items/my-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { ShipmentsComponent } from './shipments/shipments.component';


@NgModule({
  declarations: [ItemsListComponent, ProfileNavigationComponent, MyItemsComponent, OrdersComponent, ShipmentsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [ItemsListComponent]
})
export class ItemsCardModule { }
