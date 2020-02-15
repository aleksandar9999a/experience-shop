import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  get profiles() { return this.collService.items; }

  constructor(
    private collService: CollectionsService
  ) { }


  ngOnInit() {
  }

}
