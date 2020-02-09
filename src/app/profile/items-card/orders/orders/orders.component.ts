import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  get orders() { return this.ordersService.orders; }

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.ordersService.refresh();
  }

}
