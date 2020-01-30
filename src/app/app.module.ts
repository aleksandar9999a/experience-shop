import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { UserService } from './services/user.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserCatalogModule } from './user-catalog/user-catalog.module';

@NgModule({
  declarations:  [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotifierModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'experienceShop'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AuthenticationModule,
    CoreModule,
    CatalogModule,
    SharedModule,
    ProfileModule,
    UserCatalogModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
