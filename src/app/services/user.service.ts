import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()
export class UserService {
    isHere: boolean;
    uid: string;

    constructor(
        private fireBaseAuth: AngularFireAuth,
        private readonly notifier: NotifierService,
        private firebaseStorage: AngularFireStorage,
        private fireStore: AngularFirestore,
        private routerService: Router
    ) {
        this.fireBaseAuth.auth
            .onAuthStateChanged(user => {
                if (user) {
                    this.isHere = true;
                    this.uid = user.uid;
                } else {
                    this.isHere = false;
                    this.uid = null;
                }
            });
    }

    private setUid(data: any) {
        this.uid = data.user.uid;
        this.isHere = true;
    }

    async logIn(email: string, password: string) {
        return await this.fireBaseAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(d => {
                this.notifier.notify('success', 'Successful Log In!');
                this.routerService.navigate([{ outlets: { formsOutlet: null } }])
                    .then(() => this.routerService.navigate(['/catalog']));
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async createUser(email: string, password: string) {
        return await this.fireBaseAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(d => {
                this.setUid(d);
                this.updateUserData('Unknown', 'Unknown', './../../assets/images/unkItem.svg', 'Unknown').then(() => {
                    this.notifier.notify('success', 'Successful create new account!');
                    this.routerService.navigate([{ outlets: { formsOutlet: 'profile_setup' } }]);
                });
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async logOut() {
        return await this.fireBaseAuth.auth
            .signOut()
            .then(_ => {
                this.notifier.notify('success', 'Successful Log Out!');
                this.routerService.navigate(['/']);
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async updateUserData(username: string, summary: string, profileImg: any, location: string) {
        if (this.uid) {
            if (typeof profileImg === 'object') {
                profileImg = await this.uploadImage(profileImg);
            }

            username = username.toLocaleLowerCase();
            const info = { id: this.uid, username, summary, profileImg, location };

            return await this.fireStore
                .doc(`userdata/${this.uid}`)
                .set(info)
                .catch(err => this.notifier.notify('warning', err.message));
        }

        this.notifier.notify('warning', 'You must be registered to edit your data!');
        return null;
    }

    private async uploadImage(image: any) {
        const id = this.fireStore.createId();
        const storageRef = this.firebaseStorage.ref(`profileImages/${id}`);
        return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
    }

    private async getUrl(snapshot: any) {
        return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
    }

}
