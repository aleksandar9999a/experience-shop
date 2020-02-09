import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formFader } from 'src/app/shared/animations/form.animations';


@Component({
  selector: 'app-profile-set-up',
  templateUrl: './profile-set-up.component.html',
  styleUrls: ['./profile-set-up.component.css'],
  animations: [formFader]
})
export class ProfileSetUpComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  loadUserEditForm() {
    this.router.navigate([{ outlets: { formsOutlet: 'userdata_edit' } }]);
  }

  close() {
    this.router.navigate([{ outlets: { formsOutlet: [] } }]);
  }

  ngOnInit() {
  }

}
