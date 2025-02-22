import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-screen',
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    FormsModule
  ],
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.scss'
})
export class WelcomeScreenComponent {
  private _router = inject(Router);

  goToPlayScreen() {
    this._router.navigate(['play']);
  }
}
