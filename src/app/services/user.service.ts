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

    async logIn(email: string, password: string) {
        await this.fireBaseAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(_ => {
                this.notifier.notify('success', 'Successful Log In!');
                this.routerService.navigate(['/catalog']);
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async createUser(email: string, password: string) {
        await this.fireBaseAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(_ => {
                this.notifier.notify('success', 'Successful create new account!');
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async logOut() {
        await this.fireBaseAuth.auth
            .signOut()
            .then(_ => {
                this.notifier.notify('success', 'Successful Log Out!');
                this.routerService.navigate(['/']);
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    async updateUserData(username: string, summary: string, profileImg: any) {
        if (this.uid) {
            if (typeof profileImg !== 'string') {
                profileImg = await this.uploadImage(profileImg);
            }
            const info = { id: this.uid, username, summary, profileImg };
            username = username.toLocaleLowerCase();

            await this.fireStore
                .doc(`userdata/${this.uid}`)
                .set(info)
                .catch(err => this.notifier.notify('warning', err.message));
        } else {
            this.notifier.notify('warning', 'You must be registered to edit your data!');
        }
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

}
