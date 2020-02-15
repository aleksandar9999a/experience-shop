import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  get items() { return this.collService.items; }

  constructor(
    private collService: CollectionsService
  ) {
    this.collService.setOptions({
      searchName: '',
      category: 'all',
      position: 'firstPage',
      pageLimit: 5,
      collection: 'allItems'
    });
  }


  ngOnInit() {
  }

}
