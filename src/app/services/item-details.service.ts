import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class DetailsFormService {

  isOpen: boolean = false;

  constructor(
    private fireStore: AngularFirestore,
    private userService: UserService,
    private readonly notifier: NotifierService
  ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeDataState: BehaviorSubject<any> = new BehaviorSubject({});

  toggle(data?: Item) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    this.changeDataState.next(data || {});
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