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
      { path: '', component: MyItemsComponent, outlet: 'profileOutlet'},
      { path: 'shipments', component: ShipmentsComponent, outlet: 'profileOutlet'},
      { path: 'orders', component: OrdersComponent, outlet: 'profileOutlet'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
