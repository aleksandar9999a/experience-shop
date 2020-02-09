import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ShoppingCardService } from './services/shopping-card.service';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCardListComponent } from './shopping-card-list/shopping-card-list.component';
import { ShoppingCardDetailsComponent } from './shopping-card-details/shopping-card-details.component';


@NgModule({
  declarations: [ShoppingCardComponent, ShoppingCardListComponent, ShoppingCardDetailsComponent],
  providers: [ShoppingCardService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingCardComponent]
})
export class ShoppingCardModule { }
