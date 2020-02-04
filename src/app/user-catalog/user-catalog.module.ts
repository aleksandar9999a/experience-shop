import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListControllerComponent } from './user-list-controller/user-list-controller.component';
import { UserListNavigationComponent } from './user-list-navigation/user-list-navigation.component';
import { UserCatalogService } from './services/user-catalog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsService } from './services/user-details.service';
import { UserItemsListComponent } from './user-items-list/user-items-list.component';
import { UserItemsListService } from './services/user-items-list.service';
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
    UserItemsListComponent,
    UserDetailsListNavigationComponent
  ],
  providers: [UserCatalogService, UserDetailsService, UserItemsListService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [UserCatalogComponent, UserDetailsComponent]
})
export class UserCatalogModule { }
