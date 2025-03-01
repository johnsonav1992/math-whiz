import { Component, input } from '@angular/core';

@Component({
  selector: 'color-block',
  imports: [],
  template: `
    <div
      class="color-block"
      [style.background-color]="color()"
      [class.special-border]="blockGroupSize() === 10"
      [class.ten-bottom-border]="
        blockGroupSize() === 10 && indexInGroup() === 9
      "
      [class.rounded-top]="indexInGroup() === 0"
      [class.rounded-bottom]="lastIndexInGroup()"
    >
      @if (image()) {
        <img
          [src]="image()"
          width="72px"
          height="72px"
        />
      }
    </div>
  `,
  styleUrl: './color-block.component.scss'
})
export class ColorBlockComponent {
  color = input.required<string>();

  blockGroupSize = input<number>();
  indexInGroup = input<number>();
  lastIndexInGroup = input<boolean>();
  image = input<string>();
}
