import { Component, OnInit } from '@angular/core';
import { editProfileAnimations } from './user-data-edit.animations';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserDataEditService } from '../services/user-data-edit.service';
import { UserService } from 'src/app/services/user.service';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-user-data-edit',
  templateUrl: './user-data-edit.component.html',
  styleUrls: ['./user-data-edit.component.css'],
  animations: editProfileAnimations
})
export class UserDataEditComponent implements OnInit {
  defaultImage = './../../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;

  editForm: FormGroup;

  constructor(
    private userDataEditService: UserDataEditService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.editForm = fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      summary: ['', [Validators.minLength(6), Validators.maxLength(100), Validators.required]],
      profileImg: ['']
    });
  }

  get username() { return this.editForm.get('username'); }
  get summary() { return this.editForm.get('summary'); }
  get profileImg() { return this.editForm.get('profileImg'); }

  get userdata() { return this.userDataEditService.userdata; }

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

  close() {

  }

  async editProfile() {
    if (this.editForm.valid) {
      const profileImg = this.localImage || this.defaultImage;
      await this.userService.updateUserData(this.username.value, this.summary.value, profileImg);
      this.close();
    }
  }

  setInfo(data: IProfile) {
    if (data) {
      this.editForm.patchValue({
        username: data.username,
        summary: data.summary
      });

      if (data.profileImg) {
        this.defaultImage = data.profileImg;
      }
    }
  }

  ngOnInit() {
    this.userDataEditService.loadUserdata();
    this.userdata.forEach(this.setInfo.bind(this));
  }

}
