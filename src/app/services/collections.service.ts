import { Injectable } from '@angular/core';
import { DocumentSnapshot, AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { UserService } from './user.service';
import { ICollectionOptions } from '../interfaces/coll-options.interface';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OptionsValidatior } from './options-validator';

@Injectable()
export class CollectionsService {
    private state: ICollectionOptions = {
        collection: 'allItems',
        searchName: '',
        category: 'all',
        position: 'firstPage',
        pageLimit: 5,
        sortBy: 'allItems',
        once: false
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
        private userService: UserService,
        private optionsValidatior: OptionsValidatior
    ) { }

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

    setPosition(position: string) {
        if (position) {
            this.state.position = position;
        }
    }

    private setSortBy(sortBy: string) {
        if (sortBy) {
            this.state.sortBy = sortBy;
        }
    }

    setPageLimit(pageLimit: number) {
        if (pageLimit) {
            this.state.pageLimit = pageLimit;
        }
    }

    private setOnce(once: boolean) {
        this.state.once = once;
    }

    setOptions(options: ICollectionOptions) {
        if (this.optionsValidatior.searchErrors(options)) {
            return;
        }

        this.setSortBy(options.sortBy);
        this.setPageLimit(options.pageLimit);
        this.setPosition(options.position);
        this.setCategory(options.category);
        this.setSearchName(options.searchName);
        this.setColl(options.collection);
        this.setOnce(options.once);
        this.loadList();
    }

    loadList() {
        let currSearchFn: any;
        currSearchFn = this.searchEngine()[this.state.position];
        const itemsCollection = this.afs.collection(this.state.collection, currSearchFn);

        if (this.state.once) {
            this.items = itemsCollection.valueChanges().pipe(take(3));
        } else {
            this.items = itemsCollection.valueChanges();
        }
    }

    private getSortRef() {
        const allItems = (ref: any) => this.state.category === 'all'
            ? ref.where('name', '>=', this.state.searchName)
            : ref.where('category', '==', this.state.category).where('name', '>=', this.state.searchName);

        const receiver = (ref: any) => ref.where('receiver', '==', this.uid);
        const sender = (ref: any) => ref.where('sender', '==', this.uid);
        const userdata = (ref: any) => ref.where('username', '>=', this.state.searchName);
        const myItems = (ref: any) => ref.where('creatorUid', '==', this.uid);

        return { allItems, receiver, sender, userdata, myItems };
    }

    private searchEngine() {
        const startAfter = (ref: any) => {
            this.currPage = this.getSortRef()[this.state.sortBy](ref).startAfter(this.lastItem).limit(this.state.pageLimit);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = this.getSortRef()[this.state.sortBy](ref).endBefore(this.firstItem).limit(this.state.pageLimit);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = this.getSortRef()[this.state.sortBy](ref).limit(this.state.pageLimit);
            this.currPage.get().then(this.setFIFFP.bind(this));
            return this.currPage;
        };

        const currentPage = (ref: any) => {
            this.currPage = this.getSortRef()[this.state.sortBy](ref).startAt(this.firstItem).limit(this.state.pageLimit);
            this.currPage.get().then(this.setFirstAndLastItemInCurrPage.bind(this));
            return this.currPage;
        };

        return { startAfter, endBefore, firstPage, currentPage };
    }

    private setFIFFP(data: any) {
        this.fIFFP = data.docs[0];
        this.firstItem = data.docs[0];
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
                this.notifier.notify('info', 'Sorry, We do not have more items.');
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
