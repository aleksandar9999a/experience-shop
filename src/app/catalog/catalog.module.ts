import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CatalogPaginationComponent } from './catalog-pagination/catalog-pagination.component';
import { CatalogItemsCounterComponent } from './catalog-items-counter/catalog-items-counter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchComponent,
    CatalogPaginationComponent,
    CatalogItemsCounterComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule { }
