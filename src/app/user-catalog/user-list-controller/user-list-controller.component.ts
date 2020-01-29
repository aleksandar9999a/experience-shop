import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCatalogService } from '../services/user-catalog.service';

@Component({
  selector: 'app-user-list-controller',
  templateUrl: './user-list-controller.component.html',
  styleUrls: ['./user-list-controller.component.css']
})
export class UserListControllerComponent implements OnInit {
  pageLimitForm: FormGroup;
  constructor(private userCatalogService: UserCatalogService) {
    this.pageLimitForm = new FormGroup({ pageLimit: new FormControl(5, Validators.required) });
  }

  handleChange() {
    const pageLimit = Number(this.pageLimitForm.get('pageLimit').value);
    this.userCatalogService.setPageLimit(pageLimit);
  }

  ngOnInit() {
  }

}
