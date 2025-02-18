import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorBlockComponent } from './components/color-block/color-block.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
