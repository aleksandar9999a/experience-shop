import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class AnnouncementsService {

    constructor(
        private readonly notifier: NotifierService,
        private firebaseStorage: AngularFireStorage,
        private firabaseAuth: AngularFireAuth,
        private fireStore: AngularFirestore,
        private userService: UserService
    ) { }

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
        let url = image;
        name = name.toLocaleLowerCase();

        if (typeof image === 'object') {
            url = await this.uploadImage(image);
        }

        const user = this.firabaseAuth.auth.currentUser;
        const newItem = { creatorUid: user.uid, name, desc, image: url, price, category };

        await this.fireStore.collection('allItems').doc(id).update(newItem)
            .then(_ => {
                this.notifier.notify('success', 'You successful edit your announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async createAdv(name: string, desc: string, image: any, price: number, category: string) {
        const user = this.firabaseAuth.auth.currentUser;
        name = name.toLocaleLowerCase();
        let url = await this.uploadImage(image);
        const newItem = { creatorUid: user.uid, name, desc, image: url, price, category };

        await this.fireStore.collection('allItems').add(newItem)
            .then(_ => {
                this.notifier.notify('success', 'You successful create new announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    delete(id: string) {
        this.fireStore.collection('allItems').doc(id).delete()
            .then(_ => {
                this.notifier.notify('success', 'Successful delete your announcement!');
            })
            .catch(err => this.notifier.notify('warning', err.message))
    }

    addItemToShoppingCard(item: Item) {
        const uid = this.userService.getCurrentUid();
        this.fireStore.collection('userdata').doc(uid).collection('shoppingCard').add(item)
          .then(_ => {
            this.notifier.notify('success', 'Successful!');
          })
          .catch(err => this.notifier.notify('warning', err.message));
      }

}