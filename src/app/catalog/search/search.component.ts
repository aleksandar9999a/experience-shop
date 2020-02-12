import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private collService: CollectionsService,
    private fb: FormBuilder
  ) {
    this.searchForm = fb.group({
      name: [''],
      category: ['all']
    });
  }

  get name() { return this.searchForm.get('name'); }
  get category() { return this.searchForm.get('category'); }

  search() {
    this.collService.setOptions({ searchName: this.name.value, category: this.category.value });
  }

  ngOnInit() {
  }

}
