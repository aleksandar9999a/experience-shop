import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Item } from '../interfaces/item.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Array<Item>;
  isItems = false;
  isLoading = true;

  constructor(
    private catalogService: CatalogService,
    private afs: AngularFirestore
  ) { }

  setItems(shots: Array<Item>) {
    this.items = shots;
    this.items.length > 0 ? this.isItems = true : this.isItems = false;
    this.isLoading = false;
  }

  setSearchFunction(fn?) {
    this.isLoading = true;
    this.itemsCollection = this.afs.collection<Item>('allItems', fn);
    const newItems = this.itemsCollection.valueChanges();
    newItems.forEach(this.setItems.bind(this));
  }

  ngOnInit() {
    this.setSearchFunction();
    this.catalogService.getItemsFunction.subscribe(this.setSearchFunction.bind(this));
  }

}
