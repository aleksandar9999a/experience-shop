import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
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
