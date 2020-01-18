import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { DetailsFormService } from '../services/item-details.service';

@Component({
  selector: 'app-shopping-card-item',
  templateUrl: './shopping-card-item.component.html',
  styleUrls: ['./shopping-card-item.component.css']
})
export class ShoppingCardItemComponent implements OnInit {
  @Input('item') item: Item;
  constructor(
    private detailsAnimationsService: DetailsFormService
  ) { }

  openItemDetails(){
    this.detailsAnimationsService.toggle(this.item);
  }

  ngOnInit() {
  }

}
