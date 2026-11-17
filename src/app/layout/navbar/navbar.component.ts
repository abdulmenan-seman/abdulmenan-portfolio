import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAVIGATION_ITEMS } from '../../data/navigation.data';
import { SITE_CONFIG } from '../../core/config/site.config';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeService } from '../../core/services/theme.service';
import { 
  LucideAngularModule, 
  Menu, 
  X, 
  ArrowUpRight, 
  Sun, 
  Moon 
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="{
        'bg-[var(--bg-base)]/85 backdrop-blur-md border-b border-theme py-3 shadow-md': isScrolled(),
        'bg-transparent py-4 sm:py-5': !isScrolled()
      }">
      <div class="site-container">
        <div class="flex items-center justify-between">
          
          <!-- Brand Identity & Logo -->
          <a 
            href="#home" 
            (click)="onNavigate($event, '#home')"
            class="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent rounded-xl p-1 transition-transform hover:scale-[1.02]">
            <div class="relative w-10 h-10 rounded-xl overflow-hidden border border-theme bg-theme-surface flex items-center justify-center shadow-xs group-hover:border-theme-accent/70 transition-colors">
              <img 
                src="/logo.jpg" 
                alt="Abdulmenan Seman Logo" 
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                (error)="onImageError($event)"
              />
            </div>
            <div class="flex flex-col">
              <span class="font-display font-bold text-sm sm:text-base tracking-tight text-theme-main group-hover:text-theme-accent transition-colors">
                {{ siteConfig.name }}
              </span>
              <span class="font-mono text-[10px] text-theme-muted tracking-wider uppercase">
                {{ siteConfig.role }}
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Bar -->
          <nav class="hidden lg:flex items-center gap-1 bg-theme-surface/90 border border-theme px-3 py-1.5 rounded-full shadow-xs" aria-label="Main Navigation">
            @for (item of navItems; track item.href) {
              <a 
                [href]="item.href"
                (click)="onNavigate($event, item.href)"
                class="px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200"
                [ngClass]="{
                  'text-[var(--accent-contrast)] bg-theme-accent font-semibold shadow-xs': activeSection() === item.href.replace('#', ''),
                  'text-theme-muted hover:text-theme-main hover:bg-theme-surface-hover': activeSection() !== item.href.replace('#', '')
                }">
                {{ item.label }}
              </a>
            }
          </nav>

          <!-- Desktop Right Controls: Theme Toggle & CTA -->
          <div class="hidden sm:flex items-center gap-2.5">
            
            <!-- Dark / Light Mode Toggle Button -->
            <button 
              type="button"
              (click)="toggleTheme()"
              class="w-9 h-9 rounded-xl bg-theme-surface border border-theme hover:border-theme-accent/60 text-theme-main hover:text-theme-accent flex items-center justify-center transition-all duration-200 focus:outline-none shadow-xs"
              [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
              [title]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
              <lucide-icon [img]="isDark() ? SunIcon : MoonIcon" class="w-4 h-4 transition-transform duration-300 hover:rotate-45"></lucide-icon>
            </button>

            <!-- Connect CTA Button -->
            <a 
              href="#contact" 
              (click)="onNavigate($event, '#contact')"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-theme-accent hover:opacity-90 text-[var(--accent-contrast)] text-xs font-mono font-bold transition-all duration-200 shadow-xs hover:-translate-y-0.5">
              <span>Connect</span>
              <lucide-icon [img]="ArrowUpRightIcon" class="w-3.5 h-3.5"></lucide-icon>
            </a>
          </div>

          <!-- Mobile Controls (Theme Toggle + Menu Button) -->
          <div class="sm:hidden flex items-center gap-2">
            <button 
              type="button"
              (click)="toggleTheme()"
              class="w-9 h-9 rounded-xl bg-theme-surface border border-theme text-theme-main flex items-center justify-center transition-colors"
              [attr.aria-label]="isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
              <lucide-icon [img]="isDark() ? SunIcon : MoonIcon" class="w-4 h-4"></lucide-icon>
            </button>

            <button 
              type="button" 
              (click)="toggleMobileMenu()"
              class="w-9 h-9 rounded-xl bg-theme-surface border border-theme text-theme-main flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent"
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-label="Toggle navigation menu">
              <lucide-icon [img]="mobileMenuOpen() ? XIcon : MenuIcon" class="w-5 h-5"></lucide-icon>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (mobileMenuOpen()) {
        <div class="lg:hidden fixed inset-x-0 top-[60px] bg-[var(--bg-base)]/98 border-b border-theme backdrop-blur-xl px-5 py-6 shadow-2xl transition-all duration-300 animate-fade-in-up">
          <nav class="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            @for (item of navItems; track item.href) {
              <a 
                [href]="item.href"
                (click)="onNavigate($event, item.href)"
                class="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors"
                [ngClass]="{
                  'bg-theme-surface text-theme-accent border border-theme-accent/30 font-semibold': activeSection() === item.href.replace('#', ''),
                  'text-theme-muted hover:text-theme-main hover:bg-theme-surface-hover': activeSection() !== item.href.replace('#', '')
                }">
                <span>{{ item.label }}</span>
                @if (activeSection() === item.href.replace('#', '')) {
                  <span class="w-2 h-2 rounded-full bg-theme-accent"></span>
                }
              </a>
            }

            <div class="pt-4 mt-2 border-t border-theme flex flex-col gap-2">
              <a 
                href="#contact" 
                (click)="onNavigate($event, '#contact')"
                class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-theme-accent text-[var(--accent-contrast)] text-xs font-mono font-bold transition-colors">
                <span>Let's Connect</span>
                <lucide-icon [img]="ArrowUpRightIcon" class="w-4 h-4"></lucide-icon>
              </a>
            </div>
          </nav>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly themeService = inject(ThemeService);

  readonly siteConfig = SITE_CONFIG;
  readonly navItems = NAVIGATION_ITEMS;

  readonly mobileMenuOpen = signal(false);
  readonly activeSection = this.scrollService.activeSection;
  readonly isScrolled = this.scrollService.isScrolled;

  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly SunIcon = Sun;
  readonly MoonIcon = Moon;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollService.updateScrollState(window.scrollY);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isDark(): boolean {
    return this.themeService.isDark();
  }

  onNavigate(event: Event, href: string): void {
    event.preventDefault();
    this.scrollService.scrollTo(href);
    this.mobileMenuOpen.set(false);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img && !img.src.includes('src/logo.jpg')) {
      img.src = 'src/logo.jpg';
    }
  }
}
