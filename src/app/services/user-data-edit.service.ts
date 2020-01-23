import { Injectable, Output, EventEmitter } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class UserDataEditService {
  isOpen = false;

  constructor(
    private readonly notifier: NotifierService,
    private firebaseStorage: AngularFireStorage,
    private fireStore: AngularFirestore,
    private userService: UserService
  ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeInfo: EventEmitter<Profile> = new EventEmitter();

  toggle(data?: Profile) {
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
    const uid = this.userService.getCurrentUid();

    if (typeof profileImg !== 'string') {
      profileImg = await this.uploadImage(profileImg);
    }
    const info = { username, summary, profileImg };

    await this.fireStore
      .doc(`userdata/${uid}/userdata/info`)
      .set(info)
      .then(_ => {
        this.notifier.notify('success', 'You successful update your information!');
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }
}
