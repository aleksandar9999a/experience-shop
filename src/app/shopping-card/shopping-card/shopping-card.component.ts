import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { formAnimations } from './shopping-card.animations';
import { IItem } from 'src/app/interfaces/item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  get items() { return this.shoppingCardService.items; }
  get price() { return this.shoppingCardService.price; }

  constructor(
    private shoppingCardService: ShoppingCardService,
    private router: Router
  ) { }

  clearShoppingCard() {
    this.shoppingCardService.deleteAllItems();
  }

  buyAllProducts(newItems: Array<IItem>) {
    this.shoppingCardService.buyAllProducts(newItems);
    this.close();
  }

  close() {
    this.router.navigate([{ outlets: { formsOutlet: [] } }]);
  }

  ngOnInit() {
    this.shoppingCardService.loadItems();
  }

}
