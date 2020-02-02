import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/interfaces/item.interface';

@Injectable()
export class UserItemsListService {
    private itemsCollection: AngularFirestoreCollection<IItem>;
    items: Observable<IItem[]>;
    private uid: string;

    constructor(
        private afs: AngularFirestore
    ) { }

    searchByUserUID(uid: string) {
        this.setUID(uid);
        this.itemsCollection = this.afs.collection<IItem>('allItems', this.searchFn.bind(this));
        this.items = this.itemsCollection.valueChanges();
    }

    private setUID(uid: string) {
        this.uid = uid;
    }

    private searchFn(ref: any) {
        return ref.where('creatorUid', '==', this.uid);
    }

}
