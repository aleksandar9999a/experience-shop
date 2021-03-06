import { Component, OnInit } from '@angular/core';
import { DetailsFormService } from '../services/item-details.service';
import { IItem } from 'src/app/interfaces/item.interface';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementsService } from 'src/app/forms/services/announcements.service';
import { formFader } from 'src/app/shared/animations/form.animations';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  animations: [formFader]
})
export class ItemDetailsComponent implements OnInit {
  creatorUid: string;

  get uid() { return this.userService.uid; }
  get isHere() { return this.userService.isHere; }

  get profile() { return this.detailsFormService.profile; }
  get item() { return this.detailsFormService.item; }

  constructor(
    private detailsFormService: DetailsFormService,
    private userService: UserService,
    private announcementsService: AnnouncementsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  close() {
    this.router.navigate([{ outlets: { formsOutlet: null } }]);
  }

  edit(item: IItem) {
    this.router.navigate([{ outlets: { formsOutlet: ['create_announcement', item.id] } }]);
  }

  deleteItem(item: IItem) {
    this.announcementsService.delete(item);
    this.close();
  }

  isCreator() {
    return this.uid === this.creatorUid;
  }

  addToShoppingCard(item: IItem) {
    this.announcementsService.addItemToShoppingCard(item);
    this.close();
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.creatorUid = this.route.snapshot.params.creatorUid;
    this.detailsFormService.loadDetailsData(id, this.creatorUid);
  }

}
