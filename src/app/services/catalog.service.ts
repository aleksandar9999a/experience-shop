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

    private createItemsElements(item: any) {
        let newItem = item.data();
        newItem.id = item.id;
        this.items.push(newItem);
    }

    private setItems(shots: any){
        this.items = [];
        shots.forEach(this.createItemsElements.bind(this))
        this.allItems.next(this.items);
    }

    getAllItems() {
        this.fireStore
            .collection('allItems')
            .get()
            .subscribe(this.setItems.bind(this));
    }

    searchByNameInAll(name: string) {
        this.fireStore
            .collection('allItems', ref => ref.where('name', '>=', name))
            .get()
            .subscribe(this.setItems.bind(this));
    }

    searchByNameAndCategory(name: string, category: string) {
        this.fireStore
            .collection('allItems', ref => ref.where('type', '==', category).where('name', '>=', name))
            .get()
            .subscribe(this.setItems.bind(this));
    }

}