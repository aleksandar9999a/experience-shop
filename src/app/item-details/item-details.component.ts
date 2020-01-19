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

  ngOnInit() {
    this.detailsFormService.changeFormState.subscribe(isOpen => isOpen ? this.detailsFormState = 'open' : this.detailsFormState = 'close');
    this.detailsFormService.changeDataState.subscribe(data => this.detailsData = data);
    this.userService.isUserLogged.subscribe(isHere => this.isHere = isHere);
  }

}
