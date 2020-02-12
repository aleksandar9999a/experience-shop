import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-user-list-controller',
  templateUrl: './user-list-controller.component.html',
  styleUrls: ['./user-list-controller.component.css']
})
export class UserListControllerComponent implements OnInit {
  pageLimitForm: FormGroup;

  constructor(
    private collService: CollectionsService,
    private fb: FormBuilder
  ) {
    this.pageLimitForm = fb.group({ pageLimit: [5, Validators.required] });
  }

  handleChange() {
    const pageLimit = Number(this.pageLimitForm.get('pageLimit').value);
    this.collService.setPageLimit(pageLimit);
    this.collService.loadList();
  }

  ngOnInit() {
  }

}
