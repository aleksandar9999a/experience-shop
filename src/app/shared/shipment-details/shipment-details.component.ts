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

  get items() { return this.shipmentDetailsService.items; }
  get title() { return this.shipmentDetailsService.title; }
  get status() { return this.shipmentDetailsService.status; }
  get receiver() { return this.shipmentDetailsService.receiver; }
  get sender() { return this.shipmentDetailsService.sender; }
  get isSender() { return this.shipmentDetailsService.isSender; }

  isSended = this.status !== 'Sended';

  constructor(
    private shipmentDetailsService: ShipmentDetailsService
  ) { }

  close() {
    this.shipmentDetailsService.toggle();
  }

  changeStatus(newStatus: string) {
    this.shipmentDetailsService.changeStatus(newStatus);
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
