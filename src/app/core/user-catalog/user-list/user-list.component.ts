import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections.service';
<<<<<<< HEAD
import { Links } from 'src/app/config/links';

=======
>>>>>>> parent of 6249ca2... Deploy project

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  get profiles() { return this.collService.items; }
<<<<<<< HEAD
  get spinner() { return this.links.progresbar; }

  constructor(
    private collService: CollectionsService,
    private links: Links
=======

  constructor(
    private collService: CollectionsService
>>>>>>> parent of 6249ca2... Deploy project
  ) { }


  ngOnInit() {
  }

}
