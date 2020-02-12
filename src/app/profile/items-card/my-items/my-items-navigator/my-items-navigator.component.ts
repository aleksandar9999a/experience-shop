import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-my-items-navigator',
  templateUrl: './my-items-navigator.component.html',
  styleUrls: ['./my-items-navigator.component.css']
})
export class MyItemsNavigatorComponent implements OnInit {

  constructor(
    private collService: CollectionsService
  ) { }

  nextPage() {
    this.collService.loadNextPage();
  }

  backPage() {
    this.collService.loadBackPage();
  }

  ngOnInit() {
  }

}
