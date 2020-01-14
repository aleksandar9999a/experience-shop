import { Component, OnInit, Input } from '@angular/core';
import { DetailsFormAnimations } from '../services/item-details.animations.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('item') item: Object;
  constructor(
    private detailsAnimationsService: DetailsFormAnimations
  ) { }

  openDetails(){
    this.detailsAnimationsService.toggle();
  }

  ngOnInit() {
  }

}
