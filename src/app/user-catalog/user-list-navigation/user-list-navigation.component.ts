import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-user-list-navigation',
  templateUrl: './user-list-navigation.component.html',
  styleUrls: ['./user-list-navigation.component.css']
})
export class UserListNavigationComponent implements OnInit {
  get profiles() { return this.collService.items; }

  constructor(
    private collService: CollectionsService
  ) { }

  nextPage() {
    this.collService.loadNextPage();
  }

  backPage() {
    this.collService.loadBackPage();
  }

  ngOnInit() {
  }

}
