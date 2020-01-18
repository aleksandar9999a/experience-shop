import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShoppingCardService {
  constructor(
    private fireStore: AngularFirestore,
    private userService: UserService,
  ) { }

  isOpen: boolean = false;
  shoppingList;

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() getShoppingItems = new BehaviorSubject(this.shoppingList);

  async getShoppingCardRef(uid) {
    return await this.fireStore.collection('userdata').doc(uid).collection('shoppingCard');
  }

  async loadShoppingList() {
    const uid = await this.userService.getCurrentUid();
    const ref = await this.getShoppingCardRef(uid);

    ref.get()
      .subscribe(shots => {
        this.shoppingList = shots;
        this.getShoppingItems.next(this.shoppingList);
      });
  }

  async clear() {
    const uid = await this.userService.getCurrentUid();
    const ref = await this.getShoppingCardRef(uid);

    this.shoppingList.forEach(x => {
      ref.doc(x.id).delete();
    })
  }

  async deleteItem(id) {
    const uid = await this.userService.getCurrentUid();
    const ref = await this.getShoppingCardRef(uid);

    return await ref.doc(id).delete();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    this.loadShoppingList();
  }

}