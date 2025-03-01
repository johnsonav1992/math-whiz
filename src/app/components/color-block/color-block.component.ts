import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'color-block',
  imports: [NgOptimizedImage],
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
          [ngSrc]="image() || ''"
          width="72"
          height="72"
          [priority]="true"
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
