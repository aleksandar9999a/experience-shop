import { Component, OnInit, Input } from '@angular/core';
import { DetailsFormService } from '../services/item-details.service';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(
    private detailsAnimationsService: DetailsFormService
  ) { }

  openDetails() {
    this.detailsAnimationsService.toggle(this.item);
  }

  ngOnInit() {
  }

}
