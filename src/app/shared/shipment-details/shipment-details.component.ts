import { Component, OnInit } from '@angular/core';
import { shipmentFormAnimations } from './shipment-details.animations';
import { ShipmentDetailsService } from '../services/shipment-details.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css'],
  animations: shipmentFormAnimations
})
export class ShipmentDetailsComponent implements OnInit {
  detailsFormState = 'close';

  constructor(
    private shipmentDetailsService: ShipmentDetailsService
  ) { }

  close() {
    this.shipmentDetailsService.toggle();
  }

  private setIsOpen(currState: boolean) {
    if (currState) {
      this.detailsFormState = 'open';
    } else {
      this.detailsFormState = 'close';
    }
  }

  ngOnInit() {
    this.shipmentDetailsService.changeFormState.subscribe(this.setIsOpen.bind(this));
  }

}
