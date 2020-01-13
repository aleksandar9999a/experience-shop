import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()
export class AdvertisementsService {

    constructor(
        private readonly notifier: NotifierService,
        private firabaseAuth: AngularFireAuth,
        private firebaseStorage: AngularFireStorage
    ) { }

    async createAdv(name, desc, image, price) {
        const user = this.firabaseAuth.auth.currentUser;
        let url = await this.uploadImage(image);
        return 
    }

    async uploadImage(image) {
        const storageRef = this.firebaseStorage.ref(`items/${image.name}`);
        return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
    }

    async getUrl(snapshot) {
        return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
    }
}