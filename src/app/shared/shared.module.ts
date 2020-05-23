import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserItemComponent } from './user-item/user-item.component';
import { ShipmentItemComponent } from './shipment-item/shipment-item.component';
import { AutocompleteDirective } from './directives/autocomplete.directive';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { PageControllerComponent } from './page-controller/page-controller.component';
import { ItemsCounterComponent } from './items-counter/items-counter.component';


@NgModule({
  declarations: [
    ItemComponent,
    UserItemComponent,
    ShipmentItemComponent,
    AutocompleteDirective,
    CatalogListComponent,
    OrdersListComponent,
    PageControllerComponent,
    ItemsCounterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ItemComponent,
    UserItemComponent,
    ShipmentItemComponent,
    AutocompleteDirective,
    CatalogListComponent,
    OrdersListComponent,
    PageControllerComponent,
    ItemsCounterComponent
  ]
})
export class SharedModule { }
