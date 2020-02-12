import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-items-counter',
  templateUrl: './items-counter.component.html',
  styleUrls: ['./items-counter.component.css']
})
export class ItemsCounterComponent implements OnInit {
  pageLimitForm: FormGroup;

  constructor(
    private collService: CollectionsService,
    private fb: FormBuilder
  ) {
    this.pageLimitForm = fb.group({
      pageLimit: [5, Validators.required]
    });
  }

  handleChange() {
    const pageLimit = Number(this.pageLimitForm.get('pageLimit').value);
    this.collService.setPageLimit(pageLimit);
    this.collService.loadList();
  }

  ngOnInit() {
  }

}
