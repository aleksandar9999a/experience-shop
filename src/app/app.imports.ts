import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CoreModule } from './core/core.module';
import { CatalogModule } from './catalog/catalog.module';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { AppRoutingModule } from './app-routing.module';

export const imports = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  NotifierModule,
  BrowserAnimationsModule,
  AngularFireModule.initializeApp(environment.firebase, 'experienceShop'),
  AngularFirestoreModule,
  AngularFireStorageModule,
  AngularFireAuthModule,
  CoreModule,
  CatalogModule,
  SharedModule,
  ProfileModule
];
