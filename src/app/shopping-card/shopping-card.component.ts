import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { formAnimations } from './shopping-card.animations';
import { Item } from '../interfaces/item.interface';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  formState: string = 'close';
  itemsForBuy: Array<Item>;
  fullPrice: number;
  isHaveProducts: boolean;

  constructor(
    private shoppingCardService: ShoppingCardService,
    private readonly notifier: NotifierService
  ) { }

  clearShoppingCard() {
    this.setEmptyList();
    this.shoppingCardService.clear();
    this.shoppingCardService.loadShoppingList();
  }

  buyAllProducts() {
    this.clearShoppingCard();
    this.notifier.notify('success', 'You successful buy all products in your card!');
    this.close();
  }

  close() {
    this.shoppingCardService.toggle();
  }

  private setEmptyList() {
    this.itemsForBuy = [];
    this.fullPrice = 0;
    this.isHaveProducts = false;
  }

  private addItemToList(item: any) {
    const currItem = item.data();
    currItem.newId = item.id;
    this.itemsForBuy.push(currItem);
    this.fullPrice += Number(currItem.price);
  }

  private loadItems(items: any) {
    if (items) {
      if (items.docs.length > 0) {
        this.setEmptyList();
        this.isHaveProducts = true;
        items.forEach(this.addItemToList.bind(this))
      }else{
        this.setEmptyList();
      }
    } else {
      this.setEmptyList();
    }
  }

  private setIsOpen(currState: boolean){
    if (currState) {
      this.formState = 'open';
    }else{
      this.formState = 'close';
    }
  }

  async ngOnInit() {
    this.shoppingCardService.changeFormState.subscribe(this.setIsOpen.bind(this));
    this.shoppingCardService.getShoppingItems.subscribe(this.loadItems.bind(this));
  }

}
