import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
<<<<<<< HEAD
import { Links } from 'src/app/config/links';
=======
>>>>>>> parent of 6249ca2... Deploy project

@Component({
  selector: 'app-shopping-card-list',
  templateUrl: './shopping-card-list.component.html',
  styleUrls: ['./shopping-card-list.component.css']
})
export class ShoppingCardListComponent implements OnInit {
  get items() { return this.shoppingCardService.items; }
  get price() { return this.shoppingCardService.price; }
<<<<<<< HEAD
  get spinner() { return this.links.progresbar; }

  constructor(
    private shoppingCardService: ShoppingCardService,
    private links: Links
=======

  constructor(
    private shoppingCardService: ShoppingCardService
>>>>>>> parent of 6249ca2... Deploy project
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
