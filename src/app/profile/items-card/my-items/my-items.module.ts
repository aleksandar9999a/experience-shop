import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsService } from './services/my-items.service';
import { MyItemsComponent } from './my-items/my-items.component';
import { MyItemsNavigatorComponent } from './my-items-navigator/my-items-navigator.component';
import { MyItemsListComponent } from './my-items-list/my-items-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MyItemsNavigatorComponent, MyItemsListComponent, MyItemsComponent],
  providers: [MyItemsService],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MyItemsComponent]
})
export class MyItemsModule { }