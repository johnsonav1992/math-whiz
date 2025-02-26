import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _settings = signal<GameSettings>({
    difficulty: 'easy',
    preventZeroSum: true
  });

  public gameSettings = computed(() => this._settings());

  public updateGameSetting<
    TSetting extends keyof GameSettings,
    TValue extends GameSettings[TSetting]
  >(setting: TSetting, newValue: TValue): void {
    this._settings.update((settings) => ({ ...settings, [setting]: newValue }));
  }
}

type GameSettings = {
  difficulty: 'easy' | 'medium' | 'hard';
  preventZeroSum: boolean;
};
