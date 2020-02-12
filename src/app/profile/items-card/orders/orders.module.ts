import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [OrdersComponent, NavigationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
