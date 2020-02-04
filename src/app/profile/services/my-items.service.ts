import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IItem } from 'src/app/interfaces/item.interface';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class MyItemsService {
    private itemsCollection: AngularFirestoreCollection<IItem>;
    items: Observable<IItem[]>;
    get uid() { return this.userService.uid; }

    constructor(
        private afs: AngularFirestore,
        private userService: UserService
    ) {
        this.itemsCollection = this.afs.collection<IItem>('allItems', (ref: any) => ref.where('creatorUid', '==', this.uid));
        this.items = this.itemsCollection.valueChanges();
    }

}
