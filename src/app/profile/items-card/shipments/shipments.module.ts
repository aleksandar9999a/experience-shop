import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentsService } from './services/shipments.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ShipmentsComponent],
  providers: [ShipmentsService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShipmentsComponent]
})
export class ShipmentsModule { }
