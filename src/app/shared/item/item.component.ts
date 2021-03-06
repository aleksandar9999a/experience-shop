import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/interfaces/item.interface';
import { Router } from '@angular/router';
import { fader } from '../animations/item.animation';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [fader]
})
export class ItemComponent implements OnInit {
  @Input() item: IItem;

  constructor(
    private router: Router
  ) { }

  loadDetails() {
    this.router.navigate([{ outlets: { formsOutlet: ['item_details', this.item.id, this.item.creatorUid] } }]);
  }

  ngOnInit() {
  }

}
