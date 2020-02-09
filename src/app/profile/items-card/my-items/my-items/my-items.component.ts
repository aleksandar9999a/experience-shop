import { Component, OnInit } from '@angular/core';
import { MyItemsService } from '../services/my-items.service';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {
  get items() { return this.myItemsService.items; }

  constructor(
    private myItemsService: MyItemsService
  ) { }

  ngOnInit() {
    this.myItemsService.refreshItems('firstPage');
   }

}
