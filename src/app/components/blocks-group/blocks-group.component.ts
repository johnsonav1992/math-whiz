import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input
} from '@angular/core';
import { colorBlocksMap } from '../../../styles/colorBlockDefs';
import { ColorBlockComponent } from '../color-block/color-block.component';

@Component({
  selector: 'blocks-group',
  imports: [ColorBlockComponent],
  templateUrl: './blocks-group.component.html',
  styleUrl: './blocks-group.component.scss'
})
export class BlocksGroupComponent {
  private _el = inject(ElementRef);

  colorBlocksMap = colorBlocksMap;
  public hostEl = this._el.nativeElement as HTMLDivElement;

  operand = input.required<number>();
  isOneOfTheOperandsZero = input.required<boolean>();

  operandBlocks = computed(() =>
    Array.from({ length: this.operand() }, () => Math.random())
  );

  _ = effect(() => {
    if (this.isOneOfTheOperandsZero()) {
      this.hostEl.style.margin = 'auto 0';
    } else {
      this.hostEl.style.margin = '0';
    }
  });
}
