import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-catalog-items-counter',
  templateUrl: './catalog-items-counter.component.html',
  styleUrls: ['./catalog-items-counter.component.css']
})
export class CatalogItemsCounterComponent implements OnInit {
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
