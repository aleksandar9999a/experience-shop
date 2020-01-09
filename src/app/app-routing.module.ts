import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import { AboutComponent } from './about/about.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'createAdvertisement', component: CreateAdvertisementComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sign', component: SignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
