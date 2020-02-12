import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  get shipments() { return this.collService.items; }

  constructor(
    private collService: CollectionsService
  ) { }

  ngOnInit() {
    this.collService.setOptions({
      searchName: '',
      category: 'receiver',
      position: 'firstPage',
      pageLimit: 5,
      collection: 'orders'
    });
  }

}
