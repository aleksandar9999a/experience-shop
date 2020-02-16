import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private collService: CollectionsService,
    private fb: FormBuilder
  ) {
    this.searchForm = fb.group({
      username: ['']
    });
  }

  get username() { return this.searchForm.get('username'); }

  search() {
    this.collService.setOptions({
      searchName: this.username.value,
      position: 'firstPage',
      collection: 'userdata',
      sortBy: 'userdata',
      category: ''
    });
  }

  ngOnInit() {
  }

}
