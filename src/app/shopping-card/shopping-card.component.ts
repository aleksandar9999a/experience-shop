import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { formAnimations } from './shopping-card.animations';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  formState: string = 'close';
  itemsForBuy: Array<Item>;
  fullPrice = 0;

  constructor(
    private shoppingCardService: ShoppingCardService
  ) { }

  clearShoppingCard(){
    this.shoppingCardService.clear();
    this.shoppingCardService.loadShoppingList();
  }

  close() {
    this.shoppingCardService.toggle();
  }

  setEmptyList(){
    this.itemsForBuy = [];
    this.fullPrice = 0;
  }

  addItemToList(item){
    const currItem = item.data();
    this.itemsForBuy.push(currItem);
    this.fullPrice += Number(currItem.price);
  }

  loadItems(items){
    if (items) {
      this.setEmptyList();
      items.forEach(this.addItemToList.bind(this))
    }
  }

  async ngOnInit() {
    this.shoppingCardService.changeFormState.subscribe(isOpen => isOpen ? this.formState = 'open' : this.formState = 'close');
    this.shoppingCardService.getShoppingItems.subscribe(this.loadItems.bind(this));
  }

}
