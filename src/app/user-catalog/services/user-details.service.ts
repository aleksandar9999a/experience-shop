import { Injectable } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/interfaces/item.interface';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class UserDetailsService {
    private profileDoc: AngularFirestoreDocument<IProfile>;
    profile: Observable<IProfile>;

    private itemsCollection: AngularFirestoreCollection<IItem>;
    items: Observable<IItem[]>;
    private uid: string;
    private firstItem: IItem;
    private lastItem: IItem;
    private firstItemFromFirstPage: IItem;
    private position: string;
    private pageLimit = 4;
    private currPage;

    constructor(
        private afs: AngularFirestore,
        private readonly notifier: NotifierService
    ) { }

    loadUserdata(uid: string) {
        this.profileDoc = this.afs.doc<IProfile>(`userdata/${uid}`);
        this.profile = this.profileDoc.valueChanges();
    }

    searchByUserUID(uid: string) {
        this.setUID(uid);
        const currSearchFn = this.searchFn().firstPage;
        this.itemsCollection = this.afs.collection<IItem>('allItems', currSearchFn);
        this.items = this.itemsCollection.valueChanges();
    }

    searchByPosition(position: string) {
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

    private setUID(uid: string) {
        this.uid = uid;
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
                this.searchByPosition('startAfter');
            } else {
                this.notifier.notify('info', 'Sorry, User do not have more announcements.');
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
                    this.searchByPosition('endBefore');
                }
            } else {
                this.notifier.notify('info', 'This is first page!');
            }
        });
    }
}
