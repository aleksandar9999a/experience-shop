import { Component, OnInit } from '@angular/core';
import { ShipmentDetailsService } from '../services/shipment-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formFader } from '../animations/form.animations';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css'],
  animations: [formFader]
})
export class ShipmentDetailsComponent implements OnInit {
  get items() { return this.shipmentDetailsService.items; }
  get title() { return this.shipmentDetailsService.title; }
  get recInfo() { return this.shipmentDetailsService.recInfo; }
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
    this.router.navigate([{ outlets: { formsOutlet: null } }]);
  }

  changeStatus(newStatus: string) {
    this.shipmentDetailsService.changeStatus(newStatus);
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.shipmentDetailsService.loadData(id);
  }

}
