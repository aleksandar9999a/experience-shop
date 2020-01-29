import { Component, OnInit } from '@angular/core';
import { UserCatalogService } from '../services/user-catalog.service';

@Component({
  selector: 'app-user-list-navigation',
  templateUrl: './user-list-navigation.component.html',
  styleUrls: ['./user-list-navigation.component.css']
})
export class UserListNavigationComponent implements OnInit {
  get profiles() { return this.userCatalogService.profiles; }

  constructor(
    private userCatalogService: UserCatalogService
  ) { }

  nextPage() {
    this.userCatalogService.loadNextPage();
  }

  backPage() {
    this.userCatalogService.loadBackPage();
  }

  ngOnInit() {
  }

}
