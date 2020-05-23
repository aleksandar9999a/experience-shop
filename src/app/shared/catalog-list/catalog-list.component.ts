import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  @Input() items: Observable<IItem[]>;

  constructor() { }

  ngOnInit() {
  }

}
