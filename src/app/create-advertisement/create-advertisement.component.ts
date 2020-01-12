import { Component, OnInit } from '@angular/core';
import { createAdvAnimations } from './create-advertisement.animations';
import { CreateFormAnimations } from '../services/createFormAnimations.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css'],
  animations: createAdvAnimations
})
export class CreateAdvertisementComponent implements OnInit {
  createFormState: string = 'close';

  constructor(private createFormAnimationsService: CreateFormAnimations) { }

  ngOnInit() {
    this.createFormAnimationsService.change.subscribe(isOpen => isOpen ? this.createFormState = 'open' : this.createFormState = 'close');
  }

}
