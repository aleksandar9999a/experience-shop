import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';

@Injectable()
export class DetailsFormService {

  isOpen = false;

  constructor(
    private fireStore: AngularFirestore,
    private userService: UserService
  ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeDataState: BehaviorSubject<any> = new BehaviorSubject({});

  toggle(data?: Item) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    this.changeDataState.next(data || {});
  }

  async getShoppingCardRef(uid){
    return await this.fireStore.collection('userdata').doc(uid).collection('shoppingCard');
  }

  async delete(id){
    const uid = await this.userService.getCurrentUid();
    return this.fireStore.collection('allItems').doc(id).delete();
  }

}