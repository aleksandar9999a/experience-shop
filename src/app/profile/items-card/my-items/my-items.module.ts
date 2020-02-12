import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyItemsComponent } from './my-items/my-items.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MyItemsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MyItemsComponent]
})
export class MyItemsModule { }
