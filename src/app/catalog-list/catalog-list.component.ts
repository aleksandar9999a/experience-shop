import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.interface';
import { Observable } from 'rxjs';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  isItems = false;
  isLoading = false;

  constructor(
    private catalogService: CatalogService,
    private afs: AngularFirestore
  ) { }

  setItems(shots: Array<Item>) {
    shots.length > 0 ? this.isItems = true : this.isItems = false;
    this.isLoading = false;
  }

  setSearchFunction(fn?) {
    this.isLoading = true;
    this.itemsCollection = this.afs.collection<Item>('allItems', fn);
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(this.setItems.bind(this));
  }

  ngOnInit() {
    this.setSearchFunction();
    this.catalogService.getItemsFunction.subscribe(this.setSearchFunction.bind(this));
  }

}
