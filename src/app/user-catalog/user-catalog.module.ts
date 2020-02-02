import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListControllerComponent } from './user-list-controller/user-list-controller.component';
import { UserListNavigationComponent } from './user-list-navigation/user-list-navigation.component';
import { UserCatalogService } from './services/user-catalog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsService } from './services/user-details.service';
import { UserItemsListComponent } from './user-items-list/user-items-list.component';


@NgModule({
  declarations: [
    UserCatalogComponent,
    UserSearchComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
    UserListControllerComponent,
    UserListNavigationComponent,
    UserItemsListComponent
  ],
  providers: [UserCatalogService, UserDetailsService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UserCatalogComponent]
})
export class UserCatalogModule { }
