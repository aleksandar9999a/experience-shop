import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  get orders() { return this.ordersService.orders; }

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.ordersService.refresh();
  }

}
