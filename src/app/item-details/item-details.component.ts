import { Component, OnInit } from '@angular/core';
import { detailsFormAnimations } from './item-details.animations';
import { DetailsFormAnimations } from '../services/item-details.animations.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  animations: detailsFormAnimations
})
export class ItemDetailsComponent implements OnInit {
  detailsFormState: string = 'close';

  constructor(
    private detailsAnimationsService: DetailsFormAnimations
  ) { }

  close() {
    this.detailsAnimationsService.toggle();
  }

  ngOnInit() {
    this.detailsAnimationsService.change.subscribe(isOpen => isOpen ? this.detailsFormState = 'open' : this.detailsFormState = 'close')
  }

}
