import { Component, OnInit } from '@angular/core';
import { detailsFormAnimations } from './item-details.animations';
import { DetailsFormService } from '../services/item-details.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Item } from 'src/app/interfaces/item.interface';
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
  detailsData: Item;
  isHere = false;

  constructor(
    private detailsFormService: DetailsFormService,
    private userService: UserService,
    private editFormService: EditFormService,
    private announcementsService: AnnouncementsService,
    private fireBaseAuth: AngularFireAuth
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
    const currentUid = this.userService.getCurrentUid();
    return currentUid === this.detailsData.creatorUid;
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

  private setData(data: Item) {
    this.detailsData = data;
  }

  ngOnInit() {
    this.detailsFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
    this.detailsFormService.changeDataState.subscribe(this.setData.bind(this));
    this.fireBaseAuth.auth
      .onAuthStateChanged(user => {
        if (user) {
          this.isHere = true;
        } else {
          this.isHere = false;
        }
      });
  }

}
