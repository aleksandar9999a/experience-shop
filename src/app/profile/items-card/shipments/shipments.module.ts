import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipmentsService } from './services/shipments.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShipmentsListComponent } from './shipments-list/shipments-list.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [ShipmentsComponent, ShipmentsListComponent, NavigationComponent],
  providers: [ShipmentsService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShipmentsComponent]
})
export class ShipmentsModule { }
