import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { AnnouncementsService } from './services/announcements.service';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsFormService } from './services/item-details.service';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { ShipmentDetailsService } from './services/shipment-details.service';
import { UserDataEditService } from './services/user-data-edit.service';
import { UserDataEditComponent } from './user-data-edit/user-data-edit.component';
import { UserDetailsService } from './services/user-details.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsListNavigationComponent } from './user-details-list-navigation/user-details-list-navigation.component';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';


@NgModule({
  declarations: [
    AnnouncementFormComponent,
    ItemDetailsComponent,
    ShipmentDetailsComponent,
    UserDataEditComponent,
    UserDetailsComponent,
    UserDetailsListNavigationComponent
  ],
  providers: [
    AnnouncementsService,
    DetailsFormService,
    ShipmentDetailsService,
    UserDataEditService,
    UserDetailsService
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ShoppingCardModule
  ],
  exports: [
    AnnouncementFormComponent,
    ItemDetailsComponent,
    ShipmentDetailsComponent,
    UserDataEditComponent,
    UserDetailsComponent
  ],
})
export class FormsCardModule { }
