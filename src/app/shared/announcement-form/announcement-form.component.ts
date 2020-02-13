import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/item.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AnnouncementsService } from '../services/announcements.service';
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router } from '@angular/router';
import { formFader } from '../animations/form.animations';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css'],
  animations: [formFader]
})
export class AnnouncementFormComponent implements OnInit {
  currentData: IItem;
  defaultImage = '../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;

  get item() { return this.announcementsService.item; }

  announcementsFormGroup: FormGroup;

  constructor(
    private announcementsService: AnnouncementsService,
    private readonly notifier: NotifierService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.announcementsFormGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      desc: ['', [Validators.minLength(6), Validators.maxLength(300), Validators.required]],
      image: [''],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

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

  private createAnnouncement() {
    const image = this.localImage || this.defaultImage;
    const announcement: any = {
      name: this.name.value,
      desc: this.desc.value,
      image,
      price: this.price.value,
      category: this.category.value,
    };

    if (this.currentData) {
      announcement.id = this.currentData.id;
    }

    return announcement;
  }

  async setAnnouncement() {
    if (this.announcementsFormGroup.valid) {
      const announcement = this.createAnnouncement();
      await this.announcementsService.setAnnouncement(announcement);
      this.close();
    } else {
      this.notifier.notify('warning', 'Form data is incorrect!');
    }
  }

  close() {
    this.router.navigate([{ outlets: { formsOutlet: null } }]);
  }

  get name() { return this.announcementsFormGroup.get('name'); }
  get desc() { return this.announcementsFormGroup.get('desc'); }
  get image() { return this.announcementsFormGroup.get('image'); }
  get price() { return this.announcementsFormGroup.get('price'); }
  get category() { return this.announcementsFormGroup.get('category'); }

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

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.announcementsService.loadCurrItem(id);
      this.item.forEach(this.loadData.bind(this));
    }
  }
}
