import { Component, OnInit } from '@angular/core';
import { MyItemsService } from '../services/my-items.service';

@Component({
  selector: 'app-my-items-list',
  templateUrl: './my-items-list.component.html',
  styleUrls: ['./my-items-list.component.css']
})
export class MyItemsListComponent implements OnInit {
  get items() { return this.myItemsService.items; }

  constructor(
    private myItemsService: MyItemsService
  ) { }

  ngOnInit() {
    this.myItemsService.refreshItems();
  }

}
