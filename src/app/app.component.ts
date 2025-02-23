import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ColorBlockComponent } from './components/color-block/color-block.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _router = inject(Router);

  ngOnInit(): void {
    const [navigation] = performance.getEntriesByType(
      'navigation'
    ) as PerformanceNavigationTiming[];

    if (navigation && navigation.type === 'reload') {
      this._router.navigate(['/']);
    }
  }
}
