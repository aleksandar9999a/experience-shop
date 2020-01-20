import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class SearchFormService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  search(text: string){
    console.log();
    this.firestore
    .collection('allItems', ref => ref.where('name', '>=', text))
    .get()
    .subscribe(shots => {
      console.log(shots);
  });
    
    
  }
}