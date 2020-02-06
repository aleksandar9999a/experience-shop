import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private catalogService: CatalogService,
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
    this.catalogService.loadCategory(this.name.value, this.category.value);
  }

  ngOnInit() {
  }

}
