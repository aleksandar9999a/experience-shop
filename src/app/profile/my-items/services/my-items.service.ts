import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { IItem } from 'src/app/interfaces/item.interface';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class MyItemsService {
    private itemsCollection: AngularFirestoreCollection<IItem>;
    items: Observable<IItem[]>;
    private currPage;
    private pageLimit = 5;
    private position = 'firstPage';
    private firstItem: IItem;
    private lastItem: IItem;
    private firstItemFromFirstPage: IItem;

    get uid() { return this.userService.uid; }

    constructor(
        private afs: AngularFirestore,
        private userService: UserService,
        private readonly notifier: NotifierService
    ) { }

    refreshItems(position?: string) {
        this.setPositions(position);
        const currSearchFn = this.searchFn()[this.position];
        this.itemsCollection = this.afs.collection<IItem>('allItems', currSearchFn);
        this.items = this.itemsCollection.valueChanges();
    }

    private setPositions(position?: string) {
        if (position) {
            this.position = position;
        }
    }

    private searchFn() {
        const startAfter = (ref: any) => {
            this.currPage = ref.where('creatorUid', '==', this.uid).startAfter(this.lastItem).limit(this.pageLimit);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = ref.where('creatorUid', '==', this.uid).endBefore(this.firstItem).limit(this.pageLimit);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = ref.where('creatorUid', '==', this.uid).limit(this.pageLimit);
            this.currPage.get().then(this.setFirstItemFromFirstPage.bind(this));
            return this.currPage;
        };


        return { startAfter, endBefore, firstPage };
    }

    private setFirstItemFromFirstPage(shot) {
        this.firstItemFromFirstPage = shot.docs[0];
    }

    private setFirstAndLastItemInCurrPage(shot) {
        this.firstItem = shot.docs[0];
        this.lastItem = shot.docs[shot.docs.length - 1];
    }

    loadNextPage() {
        this.currPage.get().then(shot => {
            if (shot.docs.length === this.pageLimit) {
                this.setFirstAndLastItemInCurrPage(shot);
                this.refreshItems('startAfter');
            } else {
                this.notifier.notify('info', 'Sorry, You do not have more announcements.');
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
                    this.refreshItems('endBefore');
                }
            } else {
                this.notifier.notify('info', 'This is first page!');
            }
        });
    }

}
