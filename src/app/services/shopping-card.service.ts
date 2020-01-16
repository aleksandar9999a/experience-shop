import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShoppingCardService {
  isOpen = false;

  constructor(
    private fireStore: AngularFirestore,
    private userService: UserService,
  ){}

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() getShoppingItems = new BehaviorSubject([]);

  async loadShoppingList(){
    const uid = await this.userService.getCurrentUid();
    
    this.fireStore
      .collection('userdata')
      .doc(uid)
      .collection('shoppingCard')
      .get()
      .subscribe(shots => {
        let newItems = []

        shots.forEach(function (x) {
          newItems.push(x.data())
        })

        this.getShoppingItems.next(newItems);
      });
  }

  toggle(data) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);

    if (this.isOpen) {
      this.loadShoppingList();
    }
  }

}