import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Links } from '../../config/links';
=======
>>>>>>> parent of 6249ca2... Deploy project

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
<<<<<<< HEAD
  socialMedias = [];
  dependencies = [];
  get logo() { return this.links.logo; }

  constructor(
    private links: Links
  ) {
    this.socialMedias = links.getSocialMedias();
    this.dependencies = links.getDependencies();
  }
=======

  constructor() { }
>>>>>>> parent of 6249ca2... Deploy project

  ngOnInit() {
  }

}
