import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/interfaces/item.interface';
import { Links } from 'src/app/config/links';

const progresbar = 'https://firebasestorage.googleapis.com/v0/b/experience-shop.appspot.com/o/progresbar.gif?alt=media&token=0c9a617a-da89-48a4-95b5-a6f8ccc6657b';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  @Input() items: Observable<IItem[]>;
  get spinner() { return this.links.progresbar; }

  constructor(
    private links: Links
  ) { }

  ngOnInit() {
  }

}
