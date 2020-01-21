import { Injectable, Output, EventEmitter } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Item } from '../interfaces/item.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';

@Injectable()
export class ProfileService {
    myItems: Array<Item>;

    constructor(
        private fireStore: AngularFirestore,
        private userService: UserService,
    ) { }

    @Output() getUserdata: EventEmitter<Profile> = new EventEmitter();
    @Output() getUserItems: EventEmitter<Array<Item>> = new EventEmitter();

    private createItemsElements(item: any) {
        let newItem = item.data();
        newItem.id = item.id;
        this.myItems.push(newItem);
    }

    private setItems(shots: any) {
        this.myItems = [];
        shots.forEach(this.createItemsElements.bind(this));
        this.getUserItems.emit(this.myItems);
    }

    private setUserdata(shot: any) {
        this.getUserdata.emit(shot.data());
    }

    loadUserdata() {
        const uid = this.userService.getCurrentUid();
        if (uid) {
            this.fireStore
                .collection('userdata')
                .doc(uid)
                .collection('userdata')
                .doc('info')
                .get()
                .subscribe(this.setUserdata.bind(this));

            this.fireStore
                .collection('allItems', ref => ref.where('creatorUid', '==', uid))
                .get()
                .subscribe(this.setItems.bind(this));
        }
    }
}