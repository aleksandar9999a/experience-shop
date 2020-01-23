import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { formAnimations } from './shopping-card.animations';
import { Item } from '../interfaces/item.interface';
import { NotifierService } from 'angular-notifier';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  formState = 'close';
  itemsForBuy: Array<Item>;
  fullPrice = 0;
  isHaveProducts: boolean;

  private itemsCollection: AngularFirestoreCollection<Item>;
  itemsState: Observable<Item[]>;

  constructor(
    private shoppingCardService: ShoppingCardService,
    private readonly notifier: NotifierService,
    private afs: AngularFirestore,
    private userService: UserService
  ) {
    const uid = this.userService.getCurrentUid();
    this.itemsCollection = this.afs.collection<Item>(`userdata/${uid}/shoppingCard`);
    this.itemsState = this.itemsCollection.valueChanges();
    this.itemsState.forEach(this.setItems.bind(this));
  }

  setItems(items: Array<Item>) {
    this.itemsForBuy = items;
    this.fullPrice = items.reduce((r, x) => r += Number(x.price), 0);
    if (items.length > 0) {
      this.isHaveProducts = true;
    } else {
      this.isHaveProducts = false;
    }
  }

  deleteDoc({ id }) {
    this.itemsCollection.doc(id).delete();
  }

  clearShoppingCard() {
    this.itemsForBuy.map(this.deleteDoc.bind(this));
  }

  buyAllProducts() {
    this.clearShoppingCard();
    this.notifier.notify('success', 'You successful buy all products in your card!');
    this.close();
  }

  close() {
    this.shoppingCardService.toggle();
  }

  private setIsOpen(currState: boolean) {
    if (currState) {
      this.formState = 'open';
    } else {
      this.formState = 'close';
    }
  }

  ngOnInit() {
    this.shoppingCardService.changeFormState.subscribe(this.setIsOpen.bind(this));
  }

}
