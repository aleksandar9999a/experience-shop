import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { Links } from 'src/app/config/links';

@Component({
  selector: 'app-shopping-card-list',
  templateUrl: './shopping-card-list.component.html',
  styleUrls: ['./shopping-card-list.component.css']
})
export class ShoppingCardListComponent implements OnInit {
  get items() { return this.shoppingCardService.items; }
  get price() { return this.shoppingCardService.price; }
  get spinner() { return this.links.progresbar; }

  constructor(
    private shoppingCardService: ShoppingCardService,
    private links: Links
  ) { }

  clearShoppingCard() {
    this.shoppingCardService.deleteAllItems();
  }

  makeOrder() {
    this.shoppingCardService.changeComponentState();
  }

  ngOnInit() {
    this.shoppingCardService.loadItems();
  }

}
