import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AdvertisementsService {

    constructor(
        private readonly notifier: NotifierService,
        private firabaseAuth: AngularFireAuth,
        private firebaseStorage: AngularFireStorage,
        private fireStore: AngularFirestore
    ) { }

    async createAdv(name, desc, image, price, type) {
        const user = this.firabaseAuth.auth.currentUser;
        let url = await this.uploadImage(image);

        const newItem = { creatorUid: user.uid, name, desc, image: url, price, type };

        return await this.fireStore.collection('allItems').add(newItem)
    }

    async uploadImage(image) {
        const storageRef = this.firebaseStorage.ref(`items/${image.name}`);
        return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
    }

    async getUrl(snapshot) {
        return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
    }
}