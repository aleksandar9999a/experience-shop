import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeComponent } from './core/home/home.component';
import { UserCatalogComponent } from './user-catalog/user-catalog/user-catalog.component';
import { AnnouncementFormComponent } from './shared/announcement-form/announcement-form.component';
import { ItemDetailsComponent } from './shared/item-details/item-details.component';
import { ShipmentDetailsComponent } from './shared/shipment-details/shipment-details.component';
import { AuthenticationFormComponent } from './authentication/authentication-form/authentication-form.component';
import { ProfileSetUpComponent } from './authentication/profile-set-up/profile-set-up.component';
import { UserDataEditComponent } from './profile/user-info/user-data-edit/user-data-edit.component';
import { UserDetailsComponent } from './user-catalog/user-details/user-details.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card/shopping-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToCatalog = () => redirectUnauthorizedTo(['catalog']);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  {
    path: 'users',
    component: UserCatalogComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  { path: 'authentication', component: AuthenticationFormComponent, outlet: 'formsOutlet' },
  { path: 'profile_setup', component: ProfileSetUpComponent, outlet: 'formsOutlet' },
  { path: 'userdata_edit', component: UserDataEditComponent, outlet: 'formsOutlet' },
  { path: 'user_details/:id', component: UserDetailsComponent, outlet: 'formsOutlet' },
  { path: 'shipments_details/:id', component: ShipmentDetailsComponent, outlet: 'formsOutlet' },
  { path: 'item_details/:id/:creatorUid', component: ItemDetailsComponent, outlet: 'formsOutlet' },
  { path: 'create_announcement/:id', component: AnnouncementFormComponent, outlet: 'formsOutlet' },
  { path: 'create_announcement', component: AnnouncementFormComponent, outlet: 'formsOutlet' },
  { path: 'shopping_card', component: ShoppingCardComponent, outlet: 'formsOutlet' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
