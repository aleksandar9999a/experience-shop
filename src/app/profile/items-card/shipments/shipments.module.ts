import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments/shipments.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ShipmentsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShipmentsComponent]
})
export class ShipmentsModule { }
