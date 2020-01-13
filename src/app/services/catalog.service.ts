import { Injectable, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CatalogService {

    constructor(
        private fireStore: AngularFirestore
    ) { }

    @Output() allItems = new BehaviorSubject([]);

    getAllItems() {
        this.fireStore
            .collection('allItems')
            .get()
            .subscribe(shots => {
                let newItems = []

                shots.forEach(function (x) {
                    newItems.push(x.data())
                })

                this.allItems.next(newItems);
            });
    }

}