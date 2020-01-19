import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Item } from '../interfaces/item.interface';
import { detailsFormAnimations } from './item-details.animations';
import { DetailsFormService } from '../services/item-details.service';
import { CatalogService } from '../services/catalog.service';
import { EditFormService } from '../services/edit-form.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  animations: detailsFormAnimations
})
export class ItemDetailsComponent implements OnInit {
  detailsFormState: string = 'close';
  detailsData: Item;
  isHere = false;

  constructor(
    private detailsFormService: DetailsFormService,
    private userService: UserService,
    private catalogService: CatalogService,
    private editFormService: EditFormService
  ) { }

  close() {
    this.detailsFormService.toggle();
  }

  openEditForm() {
    this.editFormService.toggle(this.detailsData);
    this.close();
  }

  deleteItem() {
    this.detailsFormService.delete(this.detailsData.id)
    this.close();
    this.catalogService.getAllItems();
  }

  isCreator() {
    let currentUid = this.userService.getCurrentUid();
    return currentUid === this.detailsData.creatorUid;
  }

  addToShoppingCard() {
    this.detailsFormService.addItemToShoppingCard(this.detailsData)
    this.close();
  }

  private setIsOpen(currState: boolean){
    if (currState) {
      this.detailsFormState = 'open';
    }else{
      this.detailsFormState = 'close';
    }
  }

  private setData(data: Item){
    this.detailsData = data;
  }

  private setIsHere(currState: boolean){
    this.isHere = currState;
  }

  ngOnInit() {
    this.detailsFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
    this.detailsFormService.changeDataState.subscribe(this.setData.bind(this));
    this.userService.isUserLogged.subscribe(this.setIsHere.bind(this));
  }

}
