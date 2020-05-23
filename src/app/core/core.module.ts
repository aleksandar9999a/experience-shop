import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileModule } from './profile/profile.module';
import { CatalogModule } from './catalog/catalog.module';
import { UserCatalogModule } from './user-catalog/user-catalog.module';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ProfileModule,
    CatalogModule,
    UserCatalogModule
  ],
  exports: [NavbarComponent, FooterComponent, HomeComponent]
})
export class CoreModule { }
