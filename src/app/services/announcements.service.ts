import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class AnnouncementsService {
    collection: AngularFirestoreCollection<Item>;
    uid: string;

    constructor(
        private readonly notifier: NotifierService,
        private firebaseStorage: AngularFireStorage,
        private firabaseAuth: AngularFireAuth,
        private fireStore: AngularFirestore
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

    async edit(id: string, name: string, desc: string, image: any, price: number, category: string) {
        name = name.toLocaleLowerCase();

        if (typeof image === 'object') {
            image = await this.uploadImage(image);
        }

        this.uid = this.firabaseAuth.auth.currentUser.uid;
        const updatedItem = { id, creatorUid: this.uid, name, desc, image, price, category };

        await this.collection.doc(id).update(updatedItem)
            .then(_ => {
                this.notifier.notify('success', 'You successful edit your announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async createAdv(name: string, desc: string, image: any, price: number, category: string) {
        name = name.toLocaleLowerCase();
        this.uid = this.firabaseAuth.auth.currentUser.uid;

        const url = await this.uploadImage(image);
        const id = this.fireStore.createId();
        const newItem = { id, creatorUid: this.uid, name, desc, image: url, price, category };

        await this.collection.doc(id).set(newItem)
            .then(_ => {
                this.notifier.notify('success', 'You successful create new announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    delete(id: string) {
        this.collection.doc(id).delete()
            .then(_ => {
                this.notifier.notify('success', 'Successful delete your announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    addItemToShoppingCard(item: Item) {
        const id = this.fireStore.createId();
        this.uid = this.firabaseAuth.auth.currentUser.uid;
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
