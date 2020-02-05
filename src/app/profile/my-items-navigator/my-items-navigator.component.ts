import { Component, OnInit } from '@angular/core';
import { MyItemsService } from '../services/my-items.service';

@Component({
  selector: 'app-my-items-navigator',
  templateUrl: './my-items-navigator.component.html',
  styleUrls: ['./my-items-navigator.component.css']
})
export class MyItemsNavigatorComponent implements OnInit {
  get items() { return this.myItemsService.items; }

  constructor(
    private myItemsService: MyItemsService
  ) { }

  nextPage() {
    this.myItemsService.loadNextPage();
  }

  backPage() {
    this.myItemsService.loadBackPage();
  }

  ngOnInit() {
  }

}
