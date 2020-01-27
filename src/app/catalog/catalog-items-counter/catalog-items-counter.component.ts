import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog-items-counter',
  templateUrl: './catalog-items-counter.component.html',
  styleUrls: ['./catalog-items-counter.component.css']
})
export class CatalogItemsCounterComponent implements OnInit {
  pageLimitForm: FormGroup;

  constructor(private catalogService: CatalogService) {
    this.pageLimitForm = new FormGroup({ pageLimit: new FormControl(5, Validators.required) });
  }

  handleChange() {
    const pageLimit = Number(this.pageLimitForm.get('pageLimit').value);
    this.catalogService.setPageLimit(pageLimit);
  }

  ngOnInit() {
  }
}
