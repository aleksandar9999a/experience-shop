import { Component, OnInit } from '@angular/core';
import { ProfileSetUpAnimations } from './profile-set-up.animations';
import { ProfileSetUpFormService } from './../services/profile-set-up.service';
import { UserDataEditService } from 'src/app/profile/services/user-data-edit.service';

@Component({
  selector: 'app-profile-set-up',
  templateUrl: './profile-set-up.component.html',
  styleUrls: ['./profile-set-up.component.css'],
  animations: ProfileSetUpAnimations
})
export class ProfileSetUpComponent implements OnInit {
  formState = 'close';

  constructor(
    private profileSetUpFormService: ProfileSetUpFormService,
    private userDataEditService: UserDataEditService
  ) { }

  loadUserEditForm() {
    this.profileSetUpFormService.toggle();
    this.userDataEditService.toggle();
  }

  close() {
    this.profileSetUpFormService.toggle();
  }

  setIsOpen(isOpen: boolean) {
    isOpen
      ?
      this.formState = 'open'
      :
      this.formState = 'close';
  }

  ngOnInit() {
    this.profileSetUpFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
  }

}
