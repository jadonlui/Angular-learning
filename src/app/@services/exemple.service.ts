import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExempleService {
  num = 0;
  constructor() {}
  add() {
    this.num = this.num + 1;
  }
}
