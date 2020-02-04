import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotifierService } from 'angular-notifier';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IItem } from 'src/app/interfaces/item.interface';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class AnnouncementsService {
    collection: AngularFirestoreCollection<IItem>;
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
        const d = new Date();
        const n = d.getTime();
        const storageRef = this.firebaseStorage.ref(`items/${n}`);
        return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
    }

    private async getUrl(snapshot: any) {
        return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
    }

    async setAnnouncement(name: string, desc: string, image: any, price: number, category: string, id?: string) {
        if (this.uid) {
            name = name.toLocaleLowerCase();

            if (typeof image === 'object') {
                image = await this.uploadImage(image);
            }

            if (!id) {
                id = this.fireStore.createId();
            }

            const updatedItem = { id, creatorUid: this.uid, name, desc, image, price, category };

            await this.collection.doc(id).set(updatedItem)
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
        const id = this.fireStore.createId();
        const newItem = item;
        newItem.oldId = item.id;
        newItem.id = id;

        this.fireStore.collection('userdata').doc(this.uid).collection('shoppingCard').doc(id).set(newItem)
            .then(_ => {
                this.notifier.notify('success', 'Successful!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

}
