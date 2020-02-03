import { Component, OnInit } from '@angular/core';
import { UserItemsListService } from '../services/user-items-list.service';

@Component({
  selector: 'app-user-details-list-navigation',
  templateUrl: './user-details-list-navigation.component.html',
  styleUrls: ['./user-details-list-navigation.component.css']
})
export class UserDetailsListNavigationComponent implements OnInit {
  get items() { return this.userItemsListService.items; }

  constructor(
    private userItemsListService: UserItemsListService
  ) { }

  nextPage() {
    this.userItemsListService.loadNextPage();
  }

  backPage() {
    this.userItemsListService.loadBackPage();
  }

  ngOnInit() {
  }

}
