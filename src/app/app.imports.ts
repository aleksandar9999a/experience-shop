import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
  AngularFireAuthModule
];
