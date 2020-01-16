import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../services/shopping-card.service';
import { formAnimations } from './shopping-card.animations';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  formState: string = 'close';

  constructor(
    private shoppingCardService: ShoppingCardService
  ) { }

  close() {
    this.shoppingCardService.toggle({});
  }

  ngOnInit() {
    this.shoppingCardService.changeFormState.subscribe(isOpen => isOpen ? this.formState = 'open' : this.formState = 'close')
  }

}
