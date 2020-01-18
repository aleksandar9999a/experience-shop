import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { DetailsFormService } from '../services/item-details.service';
import { ShoppingCardService } from '../services/shopping-card.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-shopping-card-item',
  templateUrl: './shopping-card-item.component.html',
  styleUrls: ['./shopping-card-item.component.css']
})
export class ShoppingCardItemComponent implements OnInit {
  @Input('item') item: Item;
  constructor(
    private detailsAnimationsService: DetailsFormService,
    private shoppingCardService: ShoppingCardService,
    private readonly notifier: NotifierService
  ) { }

  openItemDetails() {
    this.detailsAnimationsService.toggle(this.item);
  }

  deleteItem() {
    this.shoppingCardService.deleteItem(this.item.newId)
      .then(_ => {
        this.notifier.notify('success', 'You successful detele product from your shopping card!');
        this.shoppingCardService.loadShoppingList();
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  ngOnInit() {
  }

}
