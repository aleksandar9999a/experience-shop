import { Component, OnInit } from '@angular/core';
import { searchFormAnimations } from './search.animations';
import { FormGroup, FormControl } from '@angular/forms';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: searchFormAnimations
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl('all')
  })

  constructor(
    private catalogService: CatalogService
  ) { }


  search() {
    const { name, category } = this.searchForm.value;
    if (category === 'all') {
        this.catalogService.searchByNameInAll(name);
    }else{
      this.catalogService.searchByNameAndCategory(name, category);
    }
  }

  ngOnInit() {
  }

}
