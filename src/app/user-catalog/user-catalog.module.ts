import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [UserCatalogComponent, UserSearchComponent, UserListComponent, UserItemComponent, UserDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [UserCatalogComponent]
})
export class UserCatalogModule { }
