import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeComponent } from './core/home/home.component';
import { UserCatalogComponent } from './user-catalog/user-catalog/user-catalog.component';
import { AuthGuard } from './auth.guard';
import { ShipmentsComponent } from './profile/shipments/shipments.component';
import { OrdersComponent } from './profile/orders/orders.component';
import { MyItemsComponent } from './profile/my-items/my-items/my-items.component';

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
      { path: '', component: ProfileComponent, pathMatch: 'full'},
      { path: 'my-items', component: MyItemsComponent, outlet: 'profileOutlet'},
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
