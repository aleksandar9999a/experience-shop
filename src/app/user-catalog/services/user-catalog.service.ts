import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class UserCatalogService {
    private profileCollection: AngularFirestoreCollection<IProfile>;
    profiles: Observable<IProfile[]>;
    private username = '';
    private position = 'firstPage';
    private pageLimit = 5;

    private currPage;
    private lastUser: IProfile;
    private firstUser: IProfile;
    private firstItemFromFirstPage: IProfile;

    constructor(
        private afs: AngularFirestore,
        private readonly notifier: NotifierService
    ) { }

    setPageLimit(n: number) {
        this.pageLimit = n;
        this.loadList();
    }

    search(username?: string) {
        this.setData(username);
        this.loadList('firstPage');
    }

    private setData(username: string) {
        this.username = username.toLocaleLowerCase();
    }

    loadList(position?: string) {
        this.setPositions(position);
        const currSearchFn = this.searchByName()[this.position];
        this.profileCollection = this.afs.collection<IProfile>('userdata', currSearchFn);
        this.profiles = this.profileCollection.valueChanges();
    }

    private setPositions(position?: string) {
        if (position) {
            this.position = position;
        }
    }

    private searchByName() {
        const startAfter = (ref: any) => {
            this.currPage = ref.where('username', '>=', this.username).startAfter(this.lastUser).limit(this.pageLimit);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = ref.where('username', '>=', this.username).endBefore(this.firstUser).limit(this.pageLimit);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = ref.where('username', '>=', this.username).limit(this.pageLimit);
            this.currPage.get().then(this.setFirstItemFromFirstPage.bind(this));
            return this.currPage;
        };

        return { startAfter, endBefore, firstPage };
    }

    private setFirstItemFromFirstPage(shot) {
        this.firstItemFromFirstPage = shot.docs[0];
    }

    private setFirstAndLastItemInCurrPage(shot) {
        this.firstUser = shot.docs[0];
        this.lastUser = shot.docs[shot.docs.length - 1];
    }

    loadNextPage() {
        this.currPage.get().then(shot => {
            if (shot.docs.length === this.pageLimit) {
                this.setFirstAndLastItemInCurrPage(shot);
                this.loadList('startAfter');
            } else {
                this.notifier.notify('info', 'Sorry, We do not have more users.');
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
