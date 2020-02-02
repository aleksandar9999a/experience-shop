import { Component, OnInit } from '@angular/core';
import { UserItemsListService } from '../services/user-items-list.service';

@Component({
  selector: 'app-user-items-list',
  templateUrl: './user-items-list.component.html',
  styleUrls: ['./user-items-list.component.css']
})
export class UserItemsListComponent implements OnInit {
  get items() { return this.userItemsListService.items; }
  constructor(
    private userItemsListService: UserItemsListService
  ) { }

  ngOnInit() {
  }

}
