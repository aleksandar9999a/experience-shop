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

  isSended: boolean;
  deniedBtn: boolean;
  confirmedBtn: boolean;
  sendBtn: boolean;

  constructor(
    private shipmentDetailsService: ShipmentDetailsService
  ) { }

  close() {
    this.shipmentDetailsService.toggle();
  }

  changeStatus(newStatus: string) {
    this.shipmentDetailsService.changeStatus(newStatus);
    this.updateBtnStatus();
  }

  updateBtnStatus() {
    this.isSended = this.status === 'Sended';
    this.deniedBtn = this.status === 'Confirmed' || this.status === 'Sended' || this.status === 'Delivered' || this.status === 'Denied';
    this.confirmedBtn = this.status === 'Confirmed' || this.status === 'Sended' || this.status === 'Delivered' || this.status === 'Denied';
    this.sendBtn = this.status === 'Sended' || this.status === 'Delivered' || this.status === 'Denied';
  }

  private setIsOpen(currState: boolean) {
    if (currState) {
      this.detailsFormState = 'open';
      this.updateBtnStatus();
    } else {
      this.detailsFormState = 'close';
    }
  }

  ngOnInit() {
    this.shipmentDetailsService.changeFormState.subscribe(this.setIsOpen.bind(this));
  }

}
