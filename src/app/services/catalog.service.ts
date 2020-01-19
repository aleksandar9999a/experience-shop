import { Injectable, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class CatalogService {
    items: Array<Item>;
    constructor(
        private fireStore: AngularFirestore
    ) { }

    @Output() allItems = new BehaviorSubject(this.items);

    private createItemsElements(item: any){
        let newItem = item.data();
        newItem.id = item.id;
        this.items.push(newItem);
      }
    
    getAllItems() {
        this.fireStore
            .collection('allItems')
            .get()
            .subscribe(shots => {
                this.items = [];
                shots.forEach(this.createItemsElements.bind(this))
                this.allItems.next(this.items);
            });
    }

}