import { Component, computed, OnInit, signal } from '@angular/core';
import { ColorBlockComponent } from '../../components/color-block/color-block.component';
import { colorBlocksMap } from '../../../styles/colorBlockDefs';
import { BlocksGroupComponent } from '../../components/blocks-group/blocks-group.component';

@Component({
  selector: 'play-screen',
  imports: [BlocksGroupComponent],
  templateUrl: './play-screen.component.html',
  styleUrl: './play-screen.component.scss'
})
export class PlayScreenComponent implements OnInit {
  colorBlocksMap = colorBlocksMap;

  operandOne = signal(0);
  operandTwo = signal(0);

  ngOnInit() {
    this.operandOne = signal(Math.floor(Math.random() * 10));
    this.operandTwo = signal(Math.floor(Math.random() * 10));
  }
}
