import { Component, OnInit } from '@angular/core';
import { ShipmentsService } from '../services/shipments.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  get shipments() { return this.shipmentsService.shipments; }

  constructor(
    private shipmentsService: ShipmentsService
  ) { }

  ngOnInit() {
    this.shipmentsService.refresh();
    this.shipments.subscribe(console.log);
  }

}
