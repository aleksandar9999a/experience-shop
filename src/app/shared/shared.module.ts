import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DetailsFormService } from './services/item-details.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncementsService } from './services/announcements.service';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ShipmentItemComponent } from './shipment-item/shipment-item.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { ShipmentDetailsService } from './services/shipment-details.service';


@NgModule({
  declarations: [
    ItemDetailsComponent,
    ItemComponent,
    AnnouncementFormComponent,
    UserItemComponent,
    ShipmentItemComponent,
    ShipmentDetailsComponent
  ],
  providers: [
    DetailsFormService,
    AnnouncementsService,
    ShipmentDetailsService
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ItemDetailsComponent,
    ItemComponent,
    AnnouncementFormComponent,
    UserItemComponent,
    ShipmentItemComponent,
    ShipmentDetailsComponent
  ]
})
export class SharedModule { }
