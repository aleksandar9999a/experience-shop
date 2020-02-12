import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-user-catalog',
  templateUrl: './user-catalog.component.html',
  styleUrls: ['./user-catalog.component.css']
})
export class UserCatalogComponent implements OnInit {

  constructor(
    private collService: CollectionsService
  ) { }

  ngOnInit() {
    this.collService.setOptions({
      searchName: '',
      category: '',
      position: 'firstPage',
      pageLimit: 5,
      collection: 'userdata'
    });
  }

}
