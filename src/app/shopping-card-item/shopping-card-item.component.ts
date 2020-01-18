import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-shopping-card-item',
  templateUrl: './shopping-card-item.component.html',
  styleUrls: ['./shopping-card-item.component.css']
})
export class ShoppingCardItemComponent implements OnInit {
  @Input('item') item: Item;
  constructor() { }

  ngOnInit() {
  }

}
