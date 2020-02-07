import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ShoppingCardService } from './services/shopping-card.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ShoppingCardComponent],
  providers: [ShoppingCardService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingCardComponent]
})
export class ShoppingCardModule { }
