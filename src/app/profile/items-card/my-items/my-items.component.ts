import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {
  get items() { return this.collService.items; }

  constructor(
    private collService: CollectionsService
  ) { }

  ngOnInit() {
    this.collService.setOptions({
      position: 'firstPage',
      pageLimit: 5,
      collection: 'myItems'
    });
   }

}
