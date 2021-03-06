import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
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
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { CollectionsService } from './services/collections.service';
import { FormsCardModule } from './forms/forms-card.module';
import { OptionsValidatior } from './services/options-validator';
import { OptionsRestrinctions } from './config/collections-restrinctions';
import { Links } from './config/links';

@NgModule({
  declarations:  [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotifierModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot(environment.agm),
    AngularFireModule.initializeApp(environment.firebase, 'experienceShop'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AuthenticationModule,
    CoreModule,
    SharedModule,
    FormsCardModule
  ],
  providers: [
    UserService,
    AngularFireAuthGuard,
    CollectionsService,
    OptionsValidatior,
    OptionsRestrinctions,
    Links
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
