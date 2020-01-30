import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DetailsFormService } from './services/item-details.service';
import { AppRoutingModule } from '../app-routing.module';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFormService } from './services/edit-form.service';
import { CreateFormService } from './services/createForm.service';
import { AnnouncementsService } from './services/announcements.service';
import { ShoppingCardService } from './services/shopping-card.service';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';


@NgModule({
  declarations: [ItemDetailsComponent, ItemComponent, EditFormComponent, CreateAdvertisementComponent, ShoppingCardComponent],
  providers: [DetailsFormService, EditFormService, CreateFormService, AnnouncementsService, ShoppingCardService],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ItemDetailsComponent, ItemComponent, EditFormComponent, CreateAdvertisementComponent, ShoppingCardComponent]
})
export class SharedModule { }
