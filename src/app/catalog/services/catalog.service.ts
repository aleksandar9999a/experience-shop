import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { IItem } from 'src/app/interfaces/item.interface';

@Injectable()
export class CatalogService {
    private itemsCollection: AngularFirestoreCollection<IItem>;
    private firstItemFromFirstPage: DocumentSnapshot<IItem>;
    private firstItem: IItem;
    private lastItem: IItem;
    private name: string;
    private category: string;
    private currPage: any;
    private position = 'firstPage';

    items: Observable<IItem[]>;
    pageLimit = 5;

    constructor(
        private afs: AngularFirestore,
        private readonly notifier: NotifierService
    ) { }

    setPageLimit(limit: number) {
        this.pageLimit = limit;
        this.loadList();
    }

    private setFirstItemFromFirstPage(shot: any) {
        this.firstItemFromFirstPage = shot.docs[0];
    }

    private searchByNameAndCategoty() {
        const getRef = (ref: any) => this.category === 'all' ? ref : ref.where('category', '==', this.category);

        const startAfter = (ref: any) => {
            this.currPage = getRef(ref).where('name', '>=', this.name)
                .startAfter(this.lastItem).limit(this.pageLimit);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = getRef(ref).where('name', '>=', this.name)
                .endBefore(this.firstItem).limit(this.pageLimit);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = getRef(ref).where('name', '>=', this.name).limit(this.pageLimit);
            this.currPage.get().then(this.setFirstItemFromFirstPage.bind(this));
            return this.currPage;
        };

        return { startAfter, endBefore, firstPage };
    }

    private setData(name: string, category: string) {
        this.name = name.toLocaleLowerCase();
        this.category = category;
    }

    private setPositions(position?: string) {
        if (position) {
            this.position = position;
        }
    }

    loadCategory(name: string, category: string) {
        this.setData(name, category);
        this.loadList('firstPage');
    }

    loadList(position?: string) {
        let currSearchFn: any;
        this.setPositions(position);
        currSearchFn = this.searchByNameAndCategoty()[this.position];
        this.itemsCollection = this.afs.collection<IItem>('allItems', currSearchFn);
        this.items = this.itemsCollection.valueChanges();
    }

    private setFirstAndLastItemInCurrPage(shot) {
        this.firstItem = shot.docs[0];
        this.lastItem = shot.docs[shot.docs.length - 1];
    }

    loadNextPage() {
        this.currPage.get().then(shot => {
            if (shot.docs.length === this.pageLimit) {
                this.setFirstAndLastItemInCurrPage(shot);
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
                    this.notifier.notify('info', 'This is first page!');
                } else {
                    this.setFirstAndLastItemInCurrPage(shot);
                    this.loadList('endBefore');
                }
            } else {
                this.notifier.notify('info', 'This is first page!');
            }
        });
    }

}
