import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments/shipments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [ShipmentsComponent, NavigationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShipmentsComponent]
})
export class ShipmentsModule { }
