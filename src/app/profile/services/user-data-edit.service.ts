import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Injectable()
export class UserDataEditService {
  isOpen = false;
  uid: string;

  constructor(
    private readonly notifier: NotifierService,
    private firebaseStorage: AngularFireStorage,
    private fireStore: AngularFirestore,
    private firabaseAuth: AngularFireAuth
  ) {
    this.firabaseAuth.auth.onAuthStateChanged(user => user ? this.uid = user.uid : this.uid = null);
  }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeInfo: EventEmitter<IProfile> = new EventEmitter();

  toggle(data?: IProfile) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);

    if (data) {
      this.changeInfo.emit(data);
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

  async updateUserData(username: string, summary: string, profileImg: any) {
    if (this.uid) {
      if (typeof profileImg !== 'string') {
        profileImg = await this.uploadImage(profileImg);
      }
      const info = { id: this.uid, username, summary, profileImg };

      await this.fireStore
        .doc(`userdata/${this.uid}`)
        .set(info)
        .then(_ => {
          this.notifier.notify('success', 'You successful update your information!');
        })
        .catch(err => this.notifier.notify('warning', err.message));
    } else {
      this.notifier.notify('warning', 'You must be registered to edit your data!');
    }
  }

}
