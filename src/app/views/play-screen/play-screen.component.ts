import {
  Component,
  inject,
  signal,
  viewChild,
  WritableSignal
} from '@angular/core';
import { colorBlocksMap } from '../../../styles/colorBlockDefs';
import { BlocksGroupComponent } from '../../components/blocks-group/blocks-group.component';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { AnswerPopupComponent } from '../../components/answer-popup/answer-popup.component';
import { ScoreBoardComponent } from '../../components/score-board/score-board.component';

@Component({
  selector: 'play-screen',
  imports: [
    BlocksGroupComponent,
    InputNumberModule,
    ButtonModule,
    FormsModule,
    AnswerPopupComponent,
    ScoreBoardComponent
  ],
  templateUrl: './play-screen.component.html',
  styleUrl: './play-screen.component.scss',
  providers: [ConfirmationService]
})
export class PlayScreenComponent {
  private _confirmService = inject(ConfirmationService);

  colorBlocksMap = colorBlocksMap;
  correctAnswerMessages = [
    'Nice!!',
    'Good job!',
    'Excellent!',
    'Yay!',
    'Correct!'
  ];

  operandOne = signal(Math.floor(Math.random() * 11));
  operandTwo = signal(Math.floor(Math.random() * 11));
  operator = signal<'+' | '-'>(Math.random() > 0.5 ? '+' : '-');
  userAnswer = signal<number | null>(null);
  score = signal(0);

  numberInput = viewChild<InputNumber>('numberInput');

  ngOnInit() {
    this.checkAndPreventNegativeAnswerOrDoubleZero();
  }

  submit() {
    const input = this.numberInput()?.el.nativeElement;

    const result =
      this.operator() === '+'
        ? this.operandOne() + this.operandTwo()
        : this.operandOne() - this.operandTwo();

    if (this.userAnswer() === result) {
      this._confirmService.confirm({
        target: input,
        message: this.correctAnswerMessages[Math.floor(Math.random() * 5)],
        accept: () => {
          this.score.update((score) => score + 1);
          this.resetNextQuestion();
          this.userAnswer.set(null);
        }
      });
    } else {
      this._confirmService.confirm({
        target: input,
        message: 'Oops, wrong answer!',
        accept: () => this.userAnswer.set(null)
      });
    }
  }

  resetNextQuestion() {
    this.setRandomOperand(this.operandOne);
    this.setRandomOperand(this.operandTwo);
    this.setRandomOperator();

    this.checkAndPreventNegativeAnswerOrDoubleZero();
  }

  private setRandomOperator() {
    this.operator.set(Math.random() > 0.5 ? '+' : '-');
  }

  private setRandomOperand(operand: WritableSignal<number>) {
    operand.set(Math.floor(Math.random() * 11));
  }

  private checkAndPreventNegativeAnswerOrDoubleZero() {
    if (this.operator() === '-' && this.operandOne() < this.operandTwo()) {
      const temp = this.operandOne();
      this.operandOne.set(this.operandTwo());
      this.operandTwo.set(temp);
    }
    if (this.operandOne() === 0 && this.operandTwo() === 0) {
      this.setRandomOperand(this.operandOne);
      this.setRandomOperand(this.operandTwo);
    }
  }
}
