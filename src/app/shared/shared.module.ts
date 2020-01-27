import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DetailsFormService } from './services/item-details.service';


@NgModule({
  declarations: [ItemDetailsComponent, ItemComponent],
  providers: [DetailsFormService],
  imports: [
    CommonModule
  ],
  exports: [ItemDetailsComponent, ItemComponent]
})
export class SharedModule { }
