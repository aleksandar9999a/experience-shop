import { Component, OnInit, Input } from '@angular/core';
import { IShipment } from 'src/app/interfaces/shipment.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Observable<IShipment[]>;

  constructor() { }

  ngOnInit() {
  }

}
