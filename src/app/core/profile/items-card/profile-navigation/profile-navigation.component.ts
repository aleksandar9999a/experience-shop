import { Component, OnInit } from '@angular/core';
import { ICollectionOptions } from 'src/app/interfaces/coll-options.interface';
import { CollectionsService } from 'src/app/services/collections.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrls: ['./profile-navigation.component.css']
})
export class ProfileNavigationComponent implements OnInit {
  options: ICollectionOptions;

  constructor(
    private collService: CollectionsService,
    private listService: ListService
  ) { }

  changeItems(type: string) {
    const types = {
      myItems: {  position: 'firstPage', pageLimit: 5, collection: 'allItems', sortBy: 'myItems' },
      shipments: { position: 'firstPage', pageLimit: 5, collection: 'orders', sortBy: 'receiver' },
      orders: { position: 'firstPage', pageLimit: 5, collection: 'orders', sortBy: 'sender' },
    };

    if (types[type]) {
      this.collService.setOptions(types[type]);
      this.listService.changeListType(type);
    }
  }

  ngOnInit() {
  }

}
