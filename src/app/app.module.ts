import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from "angular-notifier";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AboutComponent } from './about/about.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import { SignComponent } from './sign/sign.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ItemComponent } from './item/item.component';
import { SignFormService } from './services/signForm.service';
import { UserService } from './services/user.service';
import { CreateFormAnimations } from './services/createFormAnimations.service';
import { AdvertisementsService } from './services/advertisements.service';
import { CatalogService } from './services/catalog.service';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DetailsFormAnimations } from './services/item-details.animations.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CatalogComponent,
    AboutComponent,
    CreateAdvertisementComponent,
    SignComponent,
    JumbotronComponent,
    ItemComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'experienceShop'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    SignFormService,
    UserService,
    CreateFormAnimations,
    AdvertisementsService,
    CatalogService,
    DetailsFormAnimations
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
