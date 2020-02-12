import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  get orders() { return this.collService.items; }

  constructor(
    private collService: CollectionsService
  ) { }

  ngOnInit() {
    this.collService.setOptions({
      searchName: '',
      category: 'sender',
      position: 'firstPage',
      pageLimit: 5,
      collection: 'orders'
    });
  }

}
