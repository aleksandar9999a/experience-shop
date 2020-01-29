import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeComponent } from './core/home/home.component';
import { UserCatalogComponent } from './user-catalog/user-catalog/user-catalog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'users', component: UserCatalogComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
