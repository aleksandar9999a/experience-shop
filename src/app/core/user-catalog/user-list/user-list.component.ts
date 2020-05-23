import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';
import { Links } from 'src/app/config/links';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  get profiles() { return this.collService.items; }
  get spinner() { return this.links.progresbar; }

  constructor(
    private collService: CollectionsService,
    private links: Links
  ) { }


  ngOnInit() {
  }

}
