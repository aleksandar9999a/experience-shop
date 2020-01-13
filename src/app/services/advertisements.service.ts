import { Injectable } from '@angular/core';

import { fire } from './../config/firebase';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class AdvertisementsService {

    constructor(
        private readonly notifier: NotifierService
    ) { }

    async createAdv(name, desc, image, price) {
        const user = fire.auth().currentUser;

        let lastAdv = await this.updateLastAdv();
        let url = await this.uploadImage(image);

        return fire.database()
            .ref(`items/${user.uid}/${lastAdv}`)
            .set({ name, desc, image: url, price, creatorUid: user.uid })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async updateLastAdv() {
        const user = fire.auth().currentUser;
        let lastAdv = 0;

        await this.getSnapshot()
            .then(snapshot => {
                let userData = snapshot.val();

                if (userData) {
                    lastAdv = userData.lastAdv;
                }

                lastAdv++;
            })

        await fire.database()
            .ref(`users/${user.uid}`)
            .set({ lastAdv })
            .catch(err => this.notifier.notify('warning', err.message));

        return lastAdv;
    }

    async getSnapshot() {
        const user = fire.auth().currentUser;
        return await fire.database().ref(`/users/${user.uid}`).once('value');
    }

    async uploadImage(image) {
        const storageRef = fire.storage().ref(`items/${image.name}`);
        return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
    }

    async getUrl(snapshot) {
        return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
    }
}