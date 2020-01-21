import { Component, OnInit, Input } from '@angular/core';
import { editProfileAnimations } from './user-data-edit.animations';
import { Profile } from '../interfaces/profile.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataEditService } from '../services/user-data-edit.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-user-data-edit',
  templateUrl: './user-data-edit.component.html',
  styleUrls: ['./user-data-edit.component.css'],
  animations: editProfileAnimations
})
export class UserDataEditComponent implements OnInit {
  editFormState: string = 'close';
  defaultImage: any = './../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;
  rows: number = 4;
  isDisabled: boolean = false;

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
    profileImg: new FormControl(null, Validators.required),
  })

  constructor(
    private userDataEditService: UserDataEditService,
    private profileService: ProfileService
  ) { }

  previewImg(e) {
    if (e.target.files[0]) {
      this.localImage = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.localImage);
      reader.onload = () => {
        this.localImageUrl = reader.result;
      }
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

  handleChange(){
    if (this.editForm.invalid) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  close(){
    this.userDataEditService.toggle();
  }

  async editProfile(){
    if (this.editForm.valid) {
      const { username, summary } = this.editForm.value;
      const profileImg = this.localImage || this.defaultImage;
      this.isDisabled = true;
      await this.userDataEditService.updateUserData(username, summary, profileImg)
      this.isDisabled = false;
      this.profileService.loadUserdata()
      this.userDataEditService.toggle();
    }
  }

  setFormState(state: boolean){
    if (state) {
      this.editFormState = 'open';
    }else{
      this.editFormState = 'close';
    }
  }

  setInfo(data: Profile){
    this.editForm.patchValue({
      username: data.username,
      summary: data.summary
    });

    if (data.profileImg) {
      this.defaultImage = data.profileImg;
    }
  }

  ngOnInit() {
    this.userDataEditService.change.subscribe(this.setFormState.bind(this))
    this.userDataEditService.changeInfo.subscribe(this.setInfo.bind(this))
  }

}
