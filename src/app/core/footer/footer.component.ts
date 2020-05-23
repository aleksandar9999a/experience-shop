import { Component, OnInit } from '@angular/core';
import { Links } from '../../config/links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialMedias = [];
  dependencies = [];
  get logo() { return this.links.logo; }

  constructor(
    private links: Links
  ) {
    this.socialMedias = links.getSocialMedias();
    this.dependencies = links.getDependencies();
  }

  ngOnInit() {
  }

}
