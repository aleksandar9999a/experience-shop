import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.interface';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class CatalogService {
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
    name: string;
    category: string;
    currPage;

    firstItemFromFirstPage;

    firstItem;
    lastItem;

    constructor(
        private afs: AngularFirestore,
        private readonly notifier: NotifierService
    ) { }

    private searchByName() {
        const startAfter = (ref: any) => {
            this.currPage = ref.where('name', '>=', this.name).startAfter(this.lastItem).limit(5);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = ref.where('name', '>=', this.name).endBefore(this.firstItem).limit(5);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = ref.where('name', '>=', this.name).limit(5);
            this.currPage.get().then(shot => this.firstItemFromFirstPage = shot.docs[0]);
            return this.currPage;
        };

        return { startAfter, endBefore, firstPage };
    }

    private searchByNameAndCategoty() {
        const startAfter = (ref: any) => {
            this.currPage = ref.where('category', '==', this.category).where('name', '>=', this.name)
                .startAfter(this.lastItem).limit(5);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = ref.where('category', '==', this.category).where('name', '>=', this.name)
                .endBefore(this.firstItem).limit(5);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = ref.where('category', '==', this.category).where('name', '>=', this.name).limit(5);
            this.currPage.get().then(shot => this.firstItemFromFirstPage = shot.docs[0]);
            return this.currPage;
        };

        return { startAfter, endBefore, firstPage };
    }

    loadCategory(name: string, category: string) {
        this.name = name.toLocaleLowerCase();
        this.category = category;

        this.loadList('firstPage');
    }

    loadList(position) {
        let currSearchFn;

        if (this.category === 'all') {
            currSearchFn = this.searchByName()[position];
        } else {
            currSearchFn = this.searchByNameAndCategoty()[position];
        }

        this.itemsCollection = this.afs.collection<Item>('allItems', currSearchFn);
        this.items = this.itemsCollection.valueChanges();
    }

    loadNextPage() {
        this.currPage.get().then(shot => {
            if (shot.docs.length === 5) {
                this.firstItem = shot.docs[0];
                this.lastItem = shot.docs[shot.docs.length - 1];
                this.loadList('startAfter');
            } else {
                this.notifier.notify('info', 'Sorry, We do not have more announcements.');
            }
        });
    }

    loadBackPage() {
        this.currPage.get().then(shot => {
            if (shot.docs[0]) {
                if (shot.docs[0].id === this.firstItemFromFirstPage.id) {
                    this.notifier.notify('info', 'Sorry, This is first page!');
                } else {
                    this.firstItem = shot.docs[0];
                    this.loadList('endBefore');
                }
            } else {
                this.notifier.notify('info', 'Sorry, This is first page!');
            }
        });
    }

}
