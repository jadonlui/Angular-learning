import { Directive } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './hightlight';

const directive = [HighlightDirective];

@NgModule({
  declarations: [...directive],
  imports: [CommonModule],
  exports: [...directive],
})
export class DircetiveModule {}
