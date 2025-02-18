import { Component, input } from '@angular/core';

@Component({
  selector: 'color-block',
  imports: [],
  template: `
    <div class="color-block" [style.background-color]="color()"></div>
  `,
  styleUrl: './color-block.component.scss',
})
export class ColorBlockComponent {
  color = input.required<string>();
}
