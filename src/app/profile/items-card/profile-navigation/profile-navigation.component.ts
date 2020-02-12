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
      myItems: {  position: 'firstPage', pageLimit: 5, collection: 'myItems' },
      shipments: { category: 'receiver', position: 'firstPage', pageLimit: 5, collection: 'orders' },
      orders: { category: 'sender', position: 'firstPage', pageLimit: 5, collection: 'orders' },
    };

    if (types[type]) {
      this.collService.setOptions(types[type]);
      this.listService.changeListType(type);
    }
  }

  ngOnInit() {
  }

}
