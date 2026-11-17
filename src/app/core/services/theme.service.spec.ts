import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a default theme (dark or saved)', () => {
    expect(['dark', 'light']).toContain(service.currentTheme());
  });

  it('should toggle theme between dark and light', () => {
    service.setTheme('dark');
    expect(service.isDark()).toBe(true);

    service.toggleTheme();
    expect(service.isDark()).toBe(false);
    expect(service.currentTheme()).toBe('light');

    service.toggleTheme();
    expect(service.isDark()).toBe(true);
    expect(service.currentTheme()).toBe('dark');
  });
});
