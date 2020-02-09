import { Component, OnInit } from '@angular/core';
import { formAnimations } from './shopping-card.animations';
import { Router } from '@angular/router';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: formAnimations
})
export class ShoppingCardComponent implements OnInit {
  get componentState() { return this.shoppingCardService.componentState; }

  constructor(
    private router: Router,
    private shoppingCardService: ShoppingCardService
  ) { }

  close() {
    this.router.navigate([{ outlets: { formsOutlet: [] } }]);
  }

  ngOnInit() {
  }

}
