import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { ShipmentsModule } from './shipments/shipments.module';
import { OrdersModule } from './orders/orders.module';
import { MyItemsModule } from './my-items/my-items.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [ItemsListComponent, ProfileNavigationComponent],
  imports: [
    CommonModule,
    ShipmentsModule,
    OrdersModule,
    MyItemsModule,
    AppRoutingModule
  ],
  exports: [ItemsListComponent]
})
export class ItemsCardModule { }
