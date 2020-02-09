import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { IItem } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-shopping-card-list',
  templateUrl: './shopping-card-list.component.html',
  styleUrls: ['./shopping-card-list.component.css']
})
export class ShoppingCardListComponent implements OnInit {
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
  }

  ngOnInit() {
    this.shoppingCardService.loadItems();
  }

}
