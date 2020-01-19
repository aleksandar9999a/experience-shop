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
  isItems: boolean;

  constructor(
    private catalogService: CatalogService
  ) { }

  private setNoItems(){
    this.isItems = false;
    this.items = [];
  }

  private loadItems(allItems: Array<Item>) {
    if (allItems) {
      if (allItems.length > 0) {
        this.items = allItems;
        this.isItems = true;
      } else {
        this.setNoItems();
      }
    }
  }

  ngOnInit() {
    this.catalogService.getAllItems();
    this.catalogService.allItems.subscribe(this.loadItems.bind(this));
  }

}
