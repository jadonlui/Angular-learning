import { Component, OnInit } from '@angular/core';
import { ExempleService } from '../@services/exemple.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss'],
  providers: [ExempleService],
})
export class A1Component implements OnInit {
  get num() {
    return this.exempleService.num;
  }
  constructor(private exempleService: ExempleService) {}

  ngOnInit(): void {}

  add() {
    this.exempleService.add();
  }
}
