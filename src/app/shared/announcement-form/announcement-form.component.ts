import { Component, OnInit } from '@angular/core';
import { formAnimations } from '../shopping-card/shopping-card.animations';
import { IItem } from 'src/app/interfaces/item.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnnouncementsFormService } from '../services/announcements-form.service';
import { AnnouncementsService } from '../services/announcements.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css'],
  animations: formAnimations
})
export class AnnouncementFormComponent implements OnInit {
  formState = 'close';
  currentData: IItem;
  defaultImage = '../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;
  rows = 4;

  announcementsFormGroup: FormGroup;

  constructor(
    private announcementsFormService: AnnouncementsFormService,
    private announcementsService: AnnouncementsService,
    private readonly notifier: NotifierService
  ) { }

  previewImg(e) {
    if (e.target.files[0]) {
      this.localImage = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.localImage);
      reader.onload = () => {
        this.localImageUrl = reader.result;
      };
    }
  }

  async setAnnouncement() {
    if (this.announcementsFormGroup.valid) {
      const image = this.localImage || this.defaultImage;
      if (this.currentData) {
        await this.announcementsService.setAnnouncement(
          this.name.value,
          this.desc.value,
          image,
          this.price.value,
          this.category.value,
          this.currentData.id
        );
      } else {
        await this.announcementsService.setAnnouncement(
          this.name.value,
          this.desc.value,
          image,
          this.price.value,
          this.category.value
        );
      }

      this.announcementsFormService.toggle();
    } else {
      this.notifier.notify('warning', 'Form data is incorrect!');
    }
  }

  private loadData(data: IItem) {
    this.currentData = data;
    if (data) {
      this.defaultImage = data.image;
      this.announcementsFormGroup.patchValue({
        name: data.name,
        desc: data.desc,
        price: data.price,
        category: data.category
      });
    }
  }

  close() {
    this.announcementsFormService.toggle();
  }

  setTextAreaRow(e) {
    const key = e.key;
    const ctrl = e.ctrlKey;

    if (key === 'ArrowUp' && ctrl) {
      this.rows++;
    } else if (key === 'ArrowDown' && ctrl) {
      this.rows--;
    }
  }

  private setIsOpen(currState: boolean) {
    if (currState) {
      this.formState = 'open';
    } else {
      this.formState = 'close';
      this.defaultImage = '../../assets/images/unkItem.svg';
      this.announcementsFormGroup.reset();
    }
  }

  ngOnInit() {
    this.announcementsFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
    this.announcementsFormService.changeData.subscribe(this.loadData.bind(this));

    this.announcementsFormGroup = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      desc: new FormControl(null, [
        Validators.minLength(6),
        Validators.maxLength(1000),
        Validators.required
      ]),
      image: new FormControl(null),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

  get name() { return this.announcementsFormGroup.get('name'); }
  get desc() { return this.announcementsFormGroup.get('desc'); }
  get image() { return this.announcementsFormGroup.get('image'); }
  get price() { return this.announcementsFormGroup.get('price'); }
  get category() { return this.announcementsFormGroup.get('category'); }

}
