import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserCatalogService } from '../services/user-catalog.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private userCatalogService: UserCatalogService,
    private fb: FormBuilder
  ) {
    this.searchForm = fb.group({
      username: ['']
    });
  }

  get username() { return this.searchForm.get('username'); }

  search() {
    this.userCatalogService.search(this.username.value);
  }

  ngOnInit() {
  }

}
