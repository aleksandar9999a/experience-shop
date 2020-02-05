import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  get orders() { return this.ordersService.orders; }

  constructor(
    private ordersService: OrdersService
  ) { }

  nextPage() {
    this.ordersService.loadNextPage();
  }

  backPage() {
    this.ordersService.loadBackPage();
  }

  ngOnInit() {
  }

}
