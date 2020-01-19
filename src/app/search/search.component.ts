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
  formState: string = 'close';

  searchForm = new FormGroup({
    text: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ])
  })

  constructor(
    private searchFormService: SearchFormService
  ) { }

  close(){
    this.searchFormService.toggle();
  }

  setFormState(state: boolean){
    if (state) {
      this.formState = 'open';
    }else{
      this.formState = 'close';
    }
  }

  search(){
    console.log(this.searchForm);
    
  }

  ngOnInit() {
    this.searchFormService.change.subscribe(this.setFormState.bind(this))
  }

}
