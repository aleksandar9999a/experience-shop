import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListControllerComponent } from './user-list-controller/user-list-controller.component';
import { UserListNavigationComponent } from './user-list-navigation/user-list-navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsService } from './services/user-details.service';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsListNavigationComponent } from './user-details-list-navigation/user-details-list-navigation.component';


@NgModule({
  declarations: [
    UserCatalogComponent,
    UserSearchComponent,
    UserListComponent,
    UserDetailsComponent,
    UserListControllerComponent,
    UserListNavigationComponent,
    UserDetailsListNavigationComponent
  ],
  providers: [UserDetailsService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [UserCatalogComponent, UserDetailsComponent]
})
export class UserCatalogModule { }
