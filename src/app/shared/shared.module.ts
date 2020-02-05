import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DetailsFormService } from './services/item-details.service';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnouncementsService } from './services/announcements.service';
import { ShoppingCardService } from './services/shopping-card.service';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { AnnouncementsFormService } from './services/announcements-form.service';
import { UserItemComponent } from './user-item/user-item.component';
import { ShipmentItemComponent } from './shipment-item/shipment-item.component';


@NgModule({
  declarations: [ItemDetailsComponent, ItemComponent, ShoppingCardComponent, AnnouncementFormComponent, UserItemComponent, ShipmentItemComponent],
  providers: [DetailsFormService, AnnouncementsService, ShoppingCardService, AnnouncementsFormService],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ItemDetailsComponent, ItemComponent, ShoppingCardComponent, AnnouncementFormComponent, UserItemComponent, ShipmentItemComponent]
})
export class SharedModule { }
