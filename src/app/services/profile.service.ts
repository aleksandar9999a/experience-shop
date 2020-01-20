import { Injectable, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item.interface';
import { UserService } from './user.service';

@Injectable()
export class ProfileService {
    items: Array<Item>;
    constructor(
        private fireStore: AngularFirestore,
        private userService: UserService
    ) { }

    @Output() getItems = new BehaviorSubject(this.items);

    private createItemsElements(item: any) {
        let newItem = item.data();
        newItem.id = item.id;
        this.items.push(newItem);
    }

    private setItems(shots: any){
        this.items = [];
        shots.forEach(this.createItemsElements.bind(this))
        this.getItems.next(this.items);
    }

    searchMyItems() {
        const uid = this.userService.getCurrentUid();
        this.fireStore
            .collection('allItems', ref => ref.where('creatorUid', '==', uid))
            .get()
            .subscribe(this.setItems.bind(this));
    }

}