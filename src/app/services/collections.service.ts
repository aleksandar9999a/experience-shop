import { Injectable } from '@angular/core';
import { DocumentSnapshot, AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { UserService } from './user.service';
import { ICollectionOptions } from '../interfaces/coll-options.interface';
import { Observable } from 'rxjs';

@Injectable()
export class CollectionsService {
    private state: ICollectionOptions = {
        collection: '',
        searchName: '',
        category: '',
        position: 'firstPage',
        pageLimit: 5
    };

    private fIFFP: DocumentSnapshot<any>; // first item from first page
    private firstItem: any;
    private lastItem: any;
    private currPage: any;
    items: Observable<any>;

    get uid() { return this.userService.uid; }

    constructor(
        private afs: AngularFirestore,
        private readonly notifier: NotifierService,
        private userService: UserService
    ) { }

    private searchForErrors(options: ICollectionOptions) {
        if (options.collection !== 'allItems' && !this.uid) {
            this.notifier.notify('warning', 'You are not authorized!');
            return true;
        }

        return false;
    }

    private setColl(collection: string) {
        if (collection) {
            this.state.collection = collection;
        }
    }

    private setSearchName(searchName: string) {
        this.state.searchName = searchName;
    }

    private setCategory(category: string) {
        if (category) {
            this.state.category = category;
        }
    }

    private setPosition(position: string) {
        if (position) {
            this.state.position = position;
        }
    }

    setPageLimit(pageLimit: number) {
        if (pageLimit) {
            this.state.pageLimit = pageLimit;
        }
    }

    setOptions(options: ICollectionOptions) {
        if (this.searchForErrors(options)) {
            return;
        }

        this.setPageLimit(options.pageLimit);
        this.setPosition(options.position);
        this.setCategory(options.category);
        this.setSearchName(options.searchName);
        this.setColl(options.collection);
        this.loadList();
    }

    private getCollection() {
        if (this.state.collection === 'myItems') {
            return 'allItems';
        }
        return this.state.collection;
    }

    loadList() {
        let currSearchFn: any;
        currSearchFn = this.searchEngine()[this.state.position];
        const coll = this.getCollection();
        const itemsCollection = this.afs.collection(coll, currSearchFn);
        this.items = itemsCollection.valueChanges();
    }

    private getRef() {
        const allItems = (ref: any) => this.state.category === 'all'
            ? ref.where('name', '>=', this.state.searchName)
            : ref.where('category', '==', this.state.category).where('name', '>=', this.state.searchName);

        const orders = (ref: any) => ref.where(this.state.category, '==', this.uid);
        const userdata = (ref: any) => ref.where('username', '>=', this.state.searchName);
        const myItems = (ref: any) => ref.where('creatorUid', '==', this.uid);

        return { allItems, orders, userdata, myItems };
    }

    private searchEngine() {
        const startAfter = (ref: any) => {
            this.currPage = this.getRef()[this.state.collection](ref).startAfter(this.lastItem).limit(this.state.pageLimit);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = this.getRef()[this.state.collection](ref).endBefore(this.firstItem).limit(this.state.pageLimit);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = this.getRef()[this.state.collection](ref).limit(this.state.pageLimit);
            this.currPage.get().then(this.setFIFFP.bind(this));
            return this.currPage;
        };

        return { startAfter, endBefore, firstPage };
    }

    private setFIFFP(data: any) {
        this.fIFFP = data.docs[0];
    }

    private setFirstAndLastItemInCurrPage(shot: any) {
        this.firstItem = shot.docs[0];
        this.lastItem = shot.docs[shot.docs.length - 1];
    }

    loadNextPage() {
        this.currPage.get().then(shot => {
            if (shot.docs.length === this.state.pageLimit) {
                this.setFirstAndLastItemInCurrPage(shot);
                this.setPosition('startAfter');
                this.loadList();
            } else {
                this.notifier.notify('info', 'Sorry, We do not have more users.');
            }
        });
    }

    loadBackPage() {
        this.currPage.get().then(shot => {
            if (shot.docs[0]) {
                if (shot.docs[0].id === this.fIFFP.id) {
                    this.notifier.notify('info', 'This is first page!');
                } else {
                    this.setFirstAndLastItemInCurrPage(shot);
                    this.setPosition('endBefore');
                    this.loadList();
                }
            } else {
                this.notifier.notify('info', 'This is first page!');
            }
        });
    }
}
