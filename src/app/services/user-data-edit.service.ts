import { Injectable, Output, EventEmitter } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { BehaviorSubject } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class UserDataEditService {

  isOpen = false;

  constructor(
    private readonly notifier: NotifierService,
    private firebaseStorage: AngularFireStorage,
    private firabaseAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private userService: UserService
  ) { }

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() changeInfo: BehaviorSubject<Object> = new BehaviorSubject({});

  toggle(data?: Profile) {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.changeInfo.next(data || {});
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

    this.fireStore
      .collection('userdata')
      .doc(uid)
      .collection('userdata')
      .doc('info')
      .update(info)
      .then(_ => {
        this.notifier.notify('success', 'You successful update your information!');
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

}