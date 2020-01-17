import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class EditFormService {

  isOpen = false;

  constructor(
    private readonly notifier: NotifierService,
    private firebaseStorage: AngularFireStorage,
    private firabaseAuth: AngularFireAuth,
    private fireStore: AngularFirestore
  ) { }

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() changeData: BehaviorSubject<any> = new BehaviorSubject({})

  toggle(data?) {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.changeData.next(data || {});
  }

  async uploadImage(image) {
    const storageRef = this.firebaseStorage.ref(`items/${image.name}`);
    return await storageRef.put(image).then(this.getUrl).catch(err => this.notifier.notify('warning', err.message));
  }

  async getUrl(snapshot) {
    return await snapshot.ref.getDownloadURL().catch(err => this.notifier.notify('warning', err.message));
  }

  async edit(id, name, desc, image, price, type) {
    let url = image;

    if (typeof image === 'object') {
      url = await this.uploadImage(image);
    }

    const user = this.firabaseAuth.auth.currentUser;
    const newItem = { creatorUid: user.uid, name, desc, image: url, price, type };

    return await this.fireStore.collection('allItems').doc(id).update(newItem);
  }

}