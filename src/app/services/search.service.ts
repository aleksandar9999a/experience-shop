import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SearchFormService {
  isOpen = false;

  constructor() { }

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}