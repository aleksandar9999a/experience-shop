import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';

@Injectable()
export class ShoppingCardService {
  isOpen: boolean;
  shoppingList;

  constructor(
    private fireStore: AngularFirestore,
    private userService: UserService,
  ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() getShoppingItems: EventEmitter<Object> = new EventEmitter();

  private getShoppingCardRef(uid: string) {
    return this.fireStore.collection('userdata').doc(uid).collection('shoppingCard');
  }

  loadShoppingList() {
    const uid = this.userService.getCurrentUid();
    const ref = this.getShoppingCardRef(uid);

    ref.get()
      .subscribe(shots => {
        this.shoppingList = shots;
        this.getShoppingItems.emit(this.shoppingList);
      });
  }

  clear() {
    const uid = this.userService.getCurrentUid();
    const ref = this.getShoppingCardRef(uid);

    this.shoppingList.forEach((x: any) => {
      ref.doc(x.id).delete();
    })
  }

  deleteItem(id: string) {
    const uid = this.userService.getCurrentUid();
    const ref = this.getShoppingCardRef(uid);
    return ref.doc(id).delete();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    this.loadShoppingList();
  }

}