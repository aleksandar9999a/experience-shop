import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeComponent } from './core/home/home.component';
import { UserCatalogComponent } from './user-catalog/user-catalog/user-catalog.component';
import { AuthGuard } from './auth.guard';
import { MyItemsComponent } from './profile/items-card/my-items/my-items/my-items.component';
import { ShipmentsComponent } from './profile/items-card/shipments/shipments/shipments.component';
import { OrdersComponent } from './profile/items-card/orders/orders/orders.component';
import { AnnouncementFormComponent } from './shared/announcement-form/announcement-form.component';
import { ItemDetailsComponent } from './shared/item-details/item-details.component';
import { ShipmentDetailsComponent } from './shared/shipment-details/shipment-details.component';
import { AuthenticationFormComponent } from './authentication/authentication-form/authentication-form.component';
import { ProfileSetUpComponent } from './authentication/profile-set-up/profile-set-up.component';
import { UserDataEditComponent } from './profile/user-info/user-data-edit/user-data-edit.component';
import { EmptyComponent } from './empty/empty.component';
import { UserDetailsComponent } from './user-catalog/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'users',
    component: UserCatalogComponent,
    canActivate: [AuthGuard],
    data: { isHere: true }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { isHere: true },
    children: [
      { path: '', component: MyItemsComponent, outlet: 'profileOutlet' },
      { path: 'shipments', component: ShipmentsComponent, outlet: 'profileOutlet' },
      { path: 'orders', component: OrdersComponent, outlet: 'profileOutlet' }
    ]
  },
  { path: '', component: EmptyComponent, outlet: 'formsOutlet' },
  { path: 'authentication', component: AuthenticationFormComponent, outlet: 'formsOutlet' },
  { path: 'profile_setup', component: ProfileSetUpComponent, outlet: 'formsOutlet' },
  { path: 'userdata_edit', component: UserDataEditComponent, outlet: 'formsOutlet' },
  { path: 'user_details/:id', component: UserDetailsComponent, outlet: 'formsOutlet' },
  { path: 'shipments_details/:id', component: ShipmentDetailsComponent, outlet: 'formsOutlet' },
  { path: 'item_details/:id/:creatorUid', component: ItemDetailsComponent, outlet: 'formsOutlet' },
  { path: 'create_announcement/:id', component: AnnouncementFormComponent, outlet: 'formsOutlet' },
  { path: 'create_announcement', component: AnnouncementFormComponent, outlet: 'formsOutlet' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
