import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog-pagination',
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.css']
})
export class CatalogPaginationComponent implements OnInit {
  get items() { return this.catalogService.items; }

  constructor(
    private catalogService: CatalogService
  ) { }

  nextPage() {
    this.catalogService.loadNextPage();
  }

  backPage() {
    this.catalogService.loadBackPage();
  }

  ngOnInit() {
  }

}
