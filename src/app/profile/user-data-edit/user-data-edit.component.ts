import { Component, OnInit } from '@angular/core';
import { editProfileAnimations } from './user-data-edit.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataEditService } from '../services/user-data-edit.service';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-user-data-edit',
  templateUrl: './user-data-edit.component.html',
  styleUrls: ['./user-data-edit.component.css'],
  animations: editProfileAnimations
})
export class UserDataEditComponent implements OnInit {
  editFormState = 'close';
  defaultImage = './../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;
  rows = 4;

  editForm = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    summary: new FormControl(null, [
      Validators.minLength(6),
      Validators.maxLength(1000),
      Validators.required
    ]),
    profileImg: new FormControl(null),
  });

  constructor(
    private userDataEditService: UserDataEditService
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

  setTextAreaRow(e) {
    const key = e.key;
    const ctrl = e.ctrlKey;

    if (key === 'ArrowUp' && ctrl) {
      this.rows++;
    } else if (key === 'ArrowDown' && ctrl) {
      this.rows--;
    }
  }

  close() {
    this.userDataEditService.toggle();
  }

  editProfile() {
    if (this.editForm.valid) {
      const { username, summary } = this.editForm.value;
      const profileImg = this.localImage || this.defaultImage;
      this.userDataEditService.updateUserData(username, summary, profileImg);
      this.userDataEditService.toggle();
    }
  }

  setFormState(state: boolean) {
    if (state) {
      this.editFormState = 'open';
    } else {
      this.editFormState = 'close';
    }
  }

  setInfo(data: IProfile) {
    this.editForm.patchValue({
      username: data.username,
      summary: data.summary
    });

    if (data.profileImg) {
      this.defaultImage = data.profileImg;
    }
  }

  ngOnInit() {
    this.userDataEditService.changeFormState.subscribe(this.setFormState.bind(this));
    this.userDataEditService.changeInfo.subscribe(this.setInfo.bind(this));
  }

  get username() { return this.editForm.get('username'); }
  get summary() { return this.editForm.get('summary'); }
  get profileImg() { return this.editForm.get('profileImg'); }

}
