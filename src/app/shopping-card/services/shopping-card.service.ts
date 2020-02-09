import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IItem } from 'src/app/interfaces/item.interface';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/services/user.service';
import { IRecipientInformation } from 'src/app/interfaces/recipientInformation.interface';
import { Router } from '@angular/router';

@Injectable()
export class ShoppingCardService {
  private itemsCollection: AngularFirestoreCollection<IItem>;
  items: Observable<IItem[]>;
  private arrFromItems: Array<IItem>;
  price = 0;
  componentState = false;

  get uid() { return this.userService.uid; }

  constructor(
    private readonly notifier: NotifierService,
    private router: Router,
    private afs: AngularFirestore,
    private userService: UserService
  ) { }

  changeComponentState() {
    this.componentState = !this.componentState;
  }

  deleteDoc({ id }) {
    this.itemsCollection.doc(id).delete();
  }

  deleteAllItems() {
    this.arrFromItems.map(this.deleteDoc.bind(this));
  }

  private createListOfOrders(recInfo: IRecipientInformation) {
    function getCreatorUid(x: IItem) { return x.creatorUid; }
    function getId(x: IItem) { return x.id; }
    function filterSenders(senderUid: string, { creatorUid }) { return creatorUid === senderUid; }

    function reduceRepeatedUid(acc: Array<string>, uid: string) {
      if (acc.includes(uid)) {
        return acc;
      }
      return acc.concat(uid);
    }

    function createSenderList(sender: string) {
      const listOfItems = this.arrFromItems.filter(filterSenders.bind(undefined, sender)).map(getId);
      const shipmentId = this.afs.createId();

      return {
        shipmentId,
        recInfo,
        sender,
        listOfItems,
        receiver: this.uid,
        status: 'Not Confirmed!'
      };
    }

    return this.arrFromItems.map(getCreatorUid).reduce((acc, x) => reduceRepeatedUid(acc, x), []).map(createSenderList.bind(this));
  }

  async makeOrder(order: any) {
    await this.afs.collection(`orders`)
      .doc(order.shipmentId)
      .set(order)
      .then(_ => this.notifier.notify('success', `You successful make order with number ${order.shipmentId}`))
      .catch(err => this.notifier.notify('warning', err.message));
  }

  async buyAllProducts(recInfo: IRecipientInformation) {
    this.createListOfOrders(recInfo).forEach(this.makeOrder.bind(this));
    this.router.navigate([{ outlets: { formsOutlet: [] } }]);
    this.changeComponentState();
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
