import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _gameSettings = signal<GameSettings>({
    difficulty: 'easy',
    preventZeroSum: true,
    preventNegativeSum: true
  });

  public gameSettings = computed(() => this._gameSettings());

  public updateGameSetting<
    TSetting extends keyof GameSettings,
    TValue extends GameSettings[TSetting]
  >(setting: TSetting, newValue: TValue): void {
    this._gameSettings.update((settings) => ({
      ...settings,
      [setting]: newValue
    }));
  }
}

type GameSettings = {
  difficulty: 'easy' | 'medium' | 'hard';
  preventZeroSum: boolean;
  preventNegativeSum: boolean;
};
