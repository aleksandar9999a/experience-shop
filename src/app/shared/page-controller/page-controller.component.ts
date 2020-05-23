import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-page-controller',
  templateUrl: './page-controller.component.html',
  styleUrls: ['./page-controller.component.css']
})
export class PageControllerComponent implements OnInit {

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
