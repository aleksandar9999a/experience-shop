import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemsCardComponent } from './items-card/items-card.component';
import { ListService } from './services/list.service';


@NgModule({
  declarations: [ItemsListComponent, ProfileNavigationComponent, ItemsCardComponent],
  providers: [ListService],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [ItemsCardComponent]
})
export class ItemsCardModule { }
