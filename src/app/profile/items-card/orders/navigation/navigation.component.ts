import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  get orders() { return this.collService.items; }

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
