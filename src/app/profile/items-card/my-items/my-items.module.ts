import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsComponent } from './my-items/my-items.component';
import { MyItemsNavigatorComponent } from './my-items-navigator/my-items-navigator.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MyItemsNavigatorComponent, MyItemsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MyItemsComponent]
})
export class MyItemsModule { }
