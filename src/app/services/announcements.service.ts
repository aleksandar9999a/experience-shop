import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AnnouncementsService {

    constructor(
        private readonly notifier: NotifierService,
        private firebaseStorage: AngularFireStorage,
        private firabaseAuth: AngularFireAuth,
        private fireStore: AngularFirestore,
    ) { }

    private async uploadImage(image: any) {
        const storageRef = this.firebaseStorage.ref(`items/${image.name}`);
        return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
    }

    private async getUrl(snapshot: any) {
        return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
    }

    async edit(id: string, name: string, desc: string, image: any, price: number, type: string) {
        let url = image;

        if (typeof image === 'object') {
            url = await this.uploadImage(image);
        }

        const user = this.firabaseAuth.auth.currentUser;
        const newItem = { creatorUid: user.uid, name, desc, image: url, price, type };

        await this.fireStore.collection('allItems').doc(id).update(newItem)
            .then(_ => {
                this.notifier.notify('success', 'You successful edit your announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async createAdv(name: string, desc: string, image: any, price: number, type: string) {
        const user = this.firabaseAuth.auth.currentUser;
        let url = await this.uploadImage(image);
        const newItem = { creatorUid: user.uid, name, desc, image: url, price, type };

        await this.fireStore.collection('allItems').add(newItem)
            .then(_ => {
                this.notifier.notify('success', 'You successful create new announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

}