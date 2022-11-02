import { Component, OnInit } from '@angular/core';
import { ExempleService } from '../@services/exemple.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.scss'],
  providers: [ExempleService],
})
export class A2Component implements OnInit {
  get num() {
    return this.exempleService.num;
  }
  constructor(private exempleService: ExempleService) {}

  ngOnInit(): void {}

  add() {
    this.exempleService.add();
  }
}
