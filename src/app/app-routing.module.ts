import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './core/catalog/catalog/catalog.component';
import { HomeComponent } from './core/home/home.component';
import { UserCatalogComponent } from './core/user-catalog/user-catalog/user-catalog.component';
import { AuthenticationFormComponent } from './authentication/authentication-form/authentication-form.component';
import { ProfileSetUpComponent } from './authentication/profile-set-up/profile-set-up.component';
import { ShoppingCardComponent } from './forms/shopping-card/shopping-card/shopping-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AnnouncementFormComponent } from './forms/announcement-form/announcement-form.component';
import { ItemDetailsComponent } from './forms/item-details/item-details.component';
import { ShipmentDetailsComponent } from './forms/shipment-details/shipment-details.component';
import { UserDataEditComponent } from './forms/user-data-edit/user-data-edit.component';
import { UserDetailsComponent } from './forms/user-details/user-details.component';
import { ProfileComponent } from './core/profile/profile/profile.component';

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
  {
    path: 'authentication',
    component: AuthenticationFormComponent,
    outlet: 'formsOutlet'
  },
  {
    path: 'profile_setup',
    component: ProfileSetUpComponent,
    outlet: 'formsOutlet'
  },
  {
    path: 'userdata_edit',
    component: UserDataEditComponent,
    outlet: 'formsOutlet',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  {
    path: 'user_details/:id',
    component: UserDetailsComponent,
    outlet: 'formsOutlet',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  {
    path: 'shipments_details/:id',
    component: ShipmentDetailsComponent,
    outlet: 'formsOutlet',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  {
    path: 'item_details/:id/:creatorUid',
    component: ItemDetailsComponent,
    outlet: 'formsOutlet'
  },
  {
    path: 'create_announcement/:id',
    component: AnnouncementFormComponent,
    outlet: 'formsOutlet',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  {
    path: 'create_announcement',
    component: AnnouncementFormComponent,
    outlet: 'formsOutlet',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  {
    path: 'shopping_card',
    component: ShoppingCardComponent,
    outlet: 'formsOutlet',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToCatalog }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
