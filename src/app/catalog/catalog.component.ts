import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  items: Array<Item>;
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
