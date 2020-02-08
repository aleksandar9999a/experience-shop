import { Component, OnInit } from '@angular/core';
import { shipmentFormAnimations } from './shipment-details.animations';
import { ShipmentDetailsService } from '../services/shipment-details.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  get btnStatus() { return this.shipmentDetailsService.btnStatus; }

  isSended: boolean;
  deniedBtn: boolean;
  confirmedBtn: boolean;
  sendBtn: boolean;

  constructor(
    private shipmentDetailsService: ShipmentDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  close() {
    this.router.navigate([{ outlets: { formsOutlet: [] } }]);
  }

  changeStatus(newStatus: string) {
    this.shipmentDetailsService.changeStatus(newStatus);
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.shipmentDetailsService.loadData(id);
  }

}
