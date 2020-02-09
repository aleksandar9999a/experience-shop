import { Component, OnInit, Input } from '@angular/core';
import { IShipment } from 'src/app/interfaces/shipment.interface';
import { Router } from '@angular/router';
import { fader } from '../animations/item.animation';

@Component({
  selector: 'app-shipment-item',
  templateUrl: './shipment-item.component.html',
  styleUrls: ['./shipment-item.component.css'],
  animations: [fader]
})
export class ShipmentItemComponent implements OnInit {
  @Input() shipment: IShipment;

  constructor(
    private router: Router
  ) { }

  openShipmentDetails() {
    this.router.navigate([{ outlets: { formsOutlet: ['shipments_details', this.shipment.id] } }]);
  }

  ngOnInit() {
  }

}
