import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './services/orders.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { OrdersListComponent } from './orders-list/orders-list.component';



@NgModule({
  declarations: [OrdersComponent, NavigationComponent, OrdersListComponent],
  providers: [OrdersService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
