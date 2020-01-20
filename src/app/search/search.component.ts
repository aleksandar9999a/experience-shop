import { Component, OnInit } from '@angular/core';
import { searchFormAnimations } from './search.animations';
import { SearchFormService } from '../services/search.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: searchFormAnimations
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    text: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  constructor(
    private searchFormService: SearchFormService
  ) { }


  search(){
    if (this.searchForm.status === 'VALID') {
      const {text} = this.searchForm.value;
      this.searchFormService.search(text);
    }
  }

  ngOnInit() {
  }

}
