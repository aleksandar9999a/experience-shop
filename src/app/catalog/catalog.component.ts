import { Component, OnInit } from '@angular/core';

import { fire } from '../config/firebase.js';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  items;
  constructor() { }

  ngOnInit() {
    fire.database().ref('/items').once('value').then(snapshot => {
      this.items = Object.values(snapshot.val());

    })
  }

}
