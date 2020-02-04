import { Component, OnInit } from '@angular/core';
import { detailsFormAnimations } from './item-details.animations';
import { DetailsFormService } from '../services/item-details.service';
import { IItem } from 'src/app/interfaces/item.interface';
import { UserService } from 'src/app/services/user.service';
import { EditFormService } from '../services/edit-form.service';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  animations: detailsFormAnimations
})
export class ItemDetailsComponent implements OnInit {
  detailsFormState = 'close';
  detailsData: IItem;

  get uid() { return this.userService.uid; }
  get isHere() { return this.userService.isHere; }

  constructor(
    private detailsFormService: DetailsFormService,
    private userService: UserService,
    private editFormService: EditFormService,
    private announcementsService: AnnouncementsService
  ) { }

  close() {
    this.detailsFormService.toggle();
  }

  openEditForm() {
    this.editFormService.toggle(this.detailsData);
    this.close();
  }

  deleteItem() {
    this.announcementsService.delete(this.detailsData);
    this.close();
  }

  isCreator() {
    return this.uid === this.detailsData.creatorUid;
  }

  addToShoppingCard() {
    this.announcementsService.addItemToShoppingCard(this.detailsData);
    this.close();
  }

  private setIsOpen(currState: boolean) {
    if (currState) {
      this.detailsFormState = 'open';
    } else {
      this.detailsFormState = 'close';
    }
  }

  private setData(data: IItem) {
    this.detailsData = data;
  }

  ngOnInit() {
    this.detailsFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
    this.detailsFormService.changeDataState.subscribe(this.setData.bind(this));
  }

}
