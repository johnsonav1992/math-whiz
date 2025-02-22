import { Component, signal } from '@angular/core';
import { colorBlocksMap } from '../../../styles/colorBlockDefs';
import { BlocksGroupComponent } from '../../components/blocks-group/blocks-group.component';

@Component({
  selector: 'play-screen',
  imports: [BlocksGroupComponent],
  templateUrl: './play-screen.component.html',
  styleUrl: './play-screen.component.scss'
})
export class PlayScreenComponent {
  colorBlocksMap = colorBlocksMap;

  operandOne = signal(Math.floor(Math.random() * 10));
  operandTwo = signal(Math.floor(Math.random() * 10));

  operator = signal<'+' | '-'>(Math.random() > 0.5 ? '+' : '-');
}
