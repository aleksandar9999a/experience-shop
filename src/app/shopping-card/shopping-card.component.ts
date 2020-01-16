import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { formAnimations } from './shopping-card.animations';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  formState: string = 'close';
  itemsForBuy;

  constructor(
    private shoppingCardService: ShoppingCardService
  ) { }

  close() {
    this.shoppingCardService.toggle({});
  }

  async ngOnInit() {
    this.shoppingCardService.changeFormState.subscribe(isOpen => isOpen ? this.formState = 'open' : this.formState = 'close');
    this.shoppingCardService.getShoppingItems.subscribe(items => this.itemsForBuy = items);
   
  }

}
