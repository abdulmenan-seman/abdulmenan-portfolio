import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly storageKey = 'abdulmenan-theme';
  readonly currentTheme = signal<ThemeMode>('dark');

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem(this.storageKey) as ThemeMode | null;
    if (saved === 'dark' || saved === 'light') {
      this.setTheme(saved);
    } else {
      // Default to dark as primary brand aesthetic
      this.setTheme('dark');
    }
  }

  toggleTheme(): void {
    const next = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);

    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.remove('dark', 'light');
      root.classList.add(theme);

      try {
        localStorage.setItem(this.storageKey, theme);
      } catch {
        // Ignore storage exceptions if restricted
      }
    }
  }

  isDark(): boolean {
    return this.currentTheme() === 'dark';
  }
}
