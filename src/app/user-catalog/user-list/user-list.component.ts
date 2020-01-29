import { Component, OnInit } from '@angular/core';
import { UserCatalogService } from '../services/user-catalog.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  get profiles() { return this.userCatalogService.profiles; }

  constructor(
    private userCatalogService: UserCatalogService
  ) { }

  ngOnInit() {
    this.userCatalogService.loadList();
  }

}
