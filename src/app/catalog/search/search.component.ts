import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl('all')
  });

  constructor(
    private catalogService: CatalogService
  ) { }


  search() {
    const { name, category } = this.searchForm.value;
    this.catalogService.loadCategory(name, category);
  }

  ngOnInit() {
  }

}
