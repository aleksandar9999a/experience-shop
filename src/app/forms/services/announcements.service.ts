import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotifierService } from 'angular-notifier';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IItem } from 'src/app/interfaces/item.interface';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AnnouncementsService {
    collection: AngularFirestoreCollection<IItem>;
    private itemDoc: AngularFirestoreDocument<IItem>;
    item: Observable<IItem>;
    get uid() { return this.userService.uid; }

    constructor(
        private readonly notifier: NotifierService,
        private firebaseStorage: AngularFireStorage,
        private fireStore: AngularFirestore,
        private userService: UserService
    ) {
        this.collection = this.fireStore.collection('allItems');
    }

    private async uploadImage(image: any) {
        const id = this.fireStore.createId();
        const storageRef = this.firebaseStorage.ref(`items/${id}`);
        return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
    }

    private async getUrl(snapshot: any) {
        return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
    }

    async setAnnouncement(announcement) {
        if (this.uid) {
            announcement.name = announcement.name.toLocaleLowerCase();

            if (typeof announcement.image === 'object') {
                announcement.image = await this.uploadImage(announcement.image);
            }

            if (!announcement.id) {
                announcement.id = this.fireStore.createId();
            }

            announcement.creatorUid = this.uid;

            await this.collection.doc(announcement.id).set(announcement)
                .then(_ => {
                    this.notifier.notify('success', 'Successful operation!');
                })
                .catch(err => this.notifier.notify('warning', err.message));
        } else {
            this.notifier.notify('warning', 'You must be registered to share announcement!');
        }
    }

    delete({ id, creatorUid }) {
        if (creatorUid === this.uid) {
            this.collection.doc(id).delete()
                .then(_ => {
                    this.notifier.notify('success', 'Successful delete your announcement!');
                })
                .catch(err => this.notifier.notify('warning', err.message));
        } else {
            this.notifier.notify('warning', 'This is not your announcement! You can not delete it!');
        }
    }

    addItemToShoppingCard(item: IItem) {
        this.fireStore.collection('userdata').doc(this.uid).collection('shoppingCard').doc(item.id).set(item)
            .then(_ => {
                this.notifier.notify('success', 'Successful!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    loadCurrItem(id: string) {
        this.itemDoc = this.fireStore.doc<IItem>(`allItems/${id}`);
        this.item = this.itemDoc.valueChanges();
    }

}
