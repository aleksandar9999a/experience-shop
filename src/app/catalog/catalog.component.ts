import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  items = [];
  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.getAllItems();
    this.catalogService.allItems.subscribe(newItems => {
      this.items = newItems;
    })
    
  }

}
