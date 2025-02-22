import { Component, computed, input, signal } from '@angular/core';
import { colorBlocksMap } from '../../../styles/colorBlockDefs';
import { ColorBlockComponent } from '../color-block/color-block.component';

@Component({
  selector: 'blocks-group',
  imports: [ColorBlockComponent],
  templateUrl: './blocks-group.component.html',
  styleUrl: './blocks-group.component.scss'
})
export class BlocksGroupComponent {
  colorBlocksMap = colorBlocksMap;

  operand = input.required<number>();

  operandBlocks = computed(() =>
    Array.from({ length: this.operand() }, () => Math.random())
  );
}
