import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IItem } from 'src/app/interfaces/item.interface';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class ShoppingCardService {
  isOpen: boolean;
  private itemsCollection: AngularFirestoreCollection<IItem>;
  items: Observable<IItem[]>;
  arrFromItems: Array<IItem>;
  price = 0;

  constructor(
    private readonly notifier: NotifierService,
    private afs: AngularFirestore,
    private userService: UserService
  ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
  }

  deleteDoc({id}) {
    this.itemsCollection.doc(id).delete();
  }

  deleteAllItems() {
    this.arrFromItems.map(this.deleteDoc.bind(this));
  }

  buyAllProducts() {
    this.deleteAllItems();
    this.notifier.notify('success', 'You successful buy all products in your card!');
  }

  setArrOfItems(arr: Array<IItem>) {
    this.arrFromItems = arr;
    this.price = this.arrFromItems.reduce((r, x) => r += Number(x.price), 0);
  }

  loadItems() {
    const uid = this.userService.getCurrentUid();
    this.itemsCollection = this.afs.collection<IItem>(`userdata/${uid}/shoppingCard`);
    this.items = this.itemsCollection.valueChanges();
    this.items.forEach(this.setArrOfItems.bind(this));
  }

}
