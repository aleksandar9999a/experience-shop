import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserCatalogService } from '../services/user-catalog.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private userCatalogService: UserCatalogService
  ) {
    this.searchForm = new FormGroup({
      username: new FormControl('')
    });
  }

  search() {
    const { username } = this.searchForm.value;
    this.userCatalogService.search(username);
  }

  ngOnInit() {
  }

}
