import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.interface';
import { Observable } from 'rxjs';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  get items() { return this.catalogService.items; }

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.catalogService.loadCategory('', 'all');
  }

}
