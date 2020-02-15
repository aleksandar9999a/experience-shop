import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UserCatalogComponent,
    UserSearchComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [UserCatalogComponent]
})
export class UserCatalogModule { }
