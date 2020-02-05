import { Component, OnInit } from '@angular/core';
import { ShipmentsService } from '../services/shipments.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  get shipments() { return this.shipmentsService.shipments; }

  constructor(
    private shipmentsService: ShipmentsService
  ) { }

  nextPage() {
    this.shipmentsService.loadNextPage();
  }

  backPage() {
    this.shipmentsService.loadBackPage();
  }
  ngOnInit() {
  }

}
