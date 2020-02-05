import { Component, OnInit } from '@angular/core';
import { ShipmentsService } from '../services/shipments.service';

@Component({
  selector: 'app-shipments-list',
  templateUrl: './shipments-list.component.html',
  styleUrls: ['./shipments-list.component.css']
})
export class ShipmentsListComponent implements OnInit {
  get shipments() { return this.shipmentsService.shipments; }

  constructor(
    private shipmentsService: ShipmentsService
  ) { }

  ngOnInit() {
    this.shipmentsService.refresh();
  }

}
