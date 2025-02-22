import { Component, computed, OnInit, signal } from '@angular/core';
import { ColorBlockComponent } from '../../components/color-block/color-block.component';
import { colorBlocksMap } from '../../../styles/colorBlockDefs';

@Component({
  selector: 'play-screen',
  imports: [ColorBlockComponent],
  templateUrl: './play-screen.component.html',
  styleUrl: './play-screen.component.scss'
})
export class PlayScreenComponent implements OnInit {
  colorBlocksMap = colorBlocksMap;

  operandOne = signal(0);
  operandTwo = signal(0);

  operandOneBlocks = computed(() =>
    Array.from({ length: this.operandOne() }, () => Math.random())
  );
  operandTwoBlocks = computed(() =>
    Array.from({ length: this.operandOne() }, () => Math.random())
  );

  ngOnInit() {
    this.operandOne = signal(Math.floor(Math.random() * 10));
    this.operandTwo = signal(Math.floor(Math.random() * 10));
  }
}
