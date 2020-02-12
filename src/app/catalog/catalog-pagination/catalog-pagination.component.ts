import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-catalog-pagination',
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.css']
})
export class CatalogPaginationComponent implements OnInit {
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
