import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IItem } from 'src/app/interfaces/item.interface';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class ShoppingCardService {
  private itemsCollection: AngularFirestoreCollection<IItem>;
  items: Observable<IItem[]>;
  arrFromItems: Array<IItem>;
  price = 0;

  get uid() { return this.userService.uid; }

  constructor(
    private readonly notifier: NotifierService,
    private afs: AngularFirestore,
    private userService: UserService
  ) { }

  deleteDoc({ id }) {
    this.itemsCollection.doc(id).delete();
  }

  deleteAllItems() {
    this.arrFromItems.map(this.deleteDoc.bind(this));
  }

  private createListOfOrders(itemsForBuy: Array<IItem>) {
    function getCreatorUid(x: IItem) { return x.creatorUid; }
    function getOldId(x: IItem) { return x.oldId; }
    function filterSenders(senderUid: string, { creatorUid }) { return creatorUid === senderUid; }

    function reduceRepeatedUid(acc: Array<string>, uid: string) {
      if (acc.includes(uid)) {
        return acc;
      }
      return acc.concat(uid);
    }

    function createSenderList(sender: string) {
      const listOfItems = itemsForBuy.filter(filterSenders.bind(undefined, sender)).map(getOldId);
      const shipmentId = this.afs.createId();

      return {
        shipmentId,
        sender,
        listOfItems,
        receiver: this.uid,
        status: 'Not Confirmed!'
      };
    }

    return itemsForBuy.map(getCreatorUid).reduce((acc, x) => reduceRepeatedUid(acc, x), []).map(createSenderList.bind(this));
  }

  private makeOrder(order: any) {
    this.afs.collection(`orders`)
      .doc(order.shipmentId)
      .set(order)
      .then(_ => this.notifier.notify('success', `You successful make order with number ${order.shipmentId}`))
      .catch(err => this.notifier.notify('warning', err.message));
  }

  buyAllProducts(itemsForBuy: Array<IItem>) {
    this.createListOfOrders(itemsForBuy).forEach(this.makeOrder.bind(this));
    this.deleteAllItems();
  }

  setArrOfItems(arr: Array<IItem>) {
    this.arrFromItems = arr;
    this.price = this.arrFromItems.reduce((r, x) => r += Number(x.price), 0);
  }

  loadItems() {
    this.itemsCollection = this.afs.collection<IItem>(`userdata/${this.uid}/shoppingCard`);
    this.items = this.itemsCollection.valueChanges();
    this.items.forEach(this.setArrOfItems.bind(this));
  }

}
