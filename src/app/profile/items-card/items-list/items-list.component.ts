import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  get items() { return this.collService.items; }
  listType = 'myItems';

  constructor(
    private collService: CollectionsService,
    private listService: ListService
  ) { }

  setListType(type: string) {
    this.listType = type;
  }

  ngOnInit() {
    this.collService.setOptions({ position: 'firstPage', pageLimit: 5, collection: 'myItems' });
    this.listService.listType.subscribe(this.setListType.bind(this));
  }

}
