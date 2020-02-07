import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { formAnimations } from './shopping-card.animations';
import { IItem } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  formState = 'close';
  get items() { return this.shoppingCardService.items; }
  get price() { return this.shoppingCardService.price; }

  constructor(
    private shoppingCardService: ShoppingCardService
  ) { }

  clearShoppingCard() {
    this.shoppingCardService.deleteAllItems();
  }

  buyAllProducts(newItems: Array<IItem>) {
    this.shoppingCardService.buyAllProducts(newItems);
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
    this.shoppingCardService.loadItems();
  }

}
