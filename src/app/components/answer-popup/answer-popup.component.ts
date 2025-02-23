import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'answer-popup',
  imports: [ConfirmPopupModule, ButtonModule],
  templateUrl: './answer-popup.component.html',
  styleUrl: './answer-popup.component.scss'
})
export class AnswerPopupComponent {}
