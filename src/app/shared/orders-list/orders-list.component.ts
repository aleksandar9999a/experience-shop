import { Component, OnInit, Input } from '@angular/core';
import { IShipment } from 'src/app/interfaces/shipment.interface';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Links } from 'src/app/config/links';

=======
>>>>>>> parent of 6249ca2... Deploy project

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Observable<IShipment[]>;
<<<<<<< HEAD
  get spinner() { return this.links.progresbar; }

  constructor(
    private links: Links
  ) { }
=======

  constructor() { }
>>>>>>> parent of 6249ca2... Deploy project

  ngOnInit() {
  }

}
