import { Component, OnInit, Input } from '@angular/core';
import { IShipment } from 'src/app/interfaces/shipment.interface';
import { ShipmentDetailsService } from '../services/shipment-details.service';

@Component({
  selector: 'app-shipment-item',
  templateUrl: './shipment-item.component.html',
  styleUrls: ['./shipment-item.component.css']
})
export class ShipmentItemComponent implements OnInit {
  @Input() shipment: IShipment;

  constructor(
    private shipmentDetailsService: ShipmentDetailsService
  ) { }

  openShipmentDetails() {
    this.shipmentDetailsService.toggle(this.shipment);
  }

  ngOnInit() {
  }

}
