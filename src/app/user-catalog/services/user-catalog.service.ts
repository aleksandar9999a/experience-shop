import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Injectable()
export class UserCatalogService {
    private profileCollection: AngularFirestoreCollection<IProfile>;
    profiles: Observable<IProfile[]>;
    private username: string;
    private position: string;

    constructor(
        private afs: AngularFirestore
    ) { }

    private setData(username: string) {
        this.username = username.toLocaleLowerCase();
    }

    private setPositions(position?: string) {
        if (position) {
            this.position = position;
        }
    }

    search(username?: string) {
        this.setData(username);
        this.loadList('firstPage');
    }

    loadList(position?: string) {
        this.setPositions(position);
        this.profileCollection = this.afs.collection<IProfile>('userdata');
        this.profiles = this.profileCollection.valueChanges();
    }

}
