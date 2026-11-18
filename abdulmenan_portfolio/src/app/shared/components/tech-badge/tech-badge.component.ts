import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span 
      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200"
      [ngClass]="{
        'bg-theme-surface border border-theme text-theme-main hover:border-theme-accent/50 hover:text-theme-accent shadow-xs': !variant || variant === 'default',
        'bg-[var(--accent)]/15 border border-[var(--accent)]/35 text-theme-accent font-semibold': variant === 'accent',
        'bg-theme-elevated border border-theme/70 text-theme-muted': variant === 'subtle'
      }">
      @if (showDot) {
        <span class="w-1.5 h-1.5 rounded-full" [ngClass]="variant === 'accent' ? 'bg-theme-accent' : 'bg-theme-muted'"></span>
      }
      <ng-content></ng-content>
    </span>
  `
})
export class TechBadgeComponent {
  @Input() variant: 'default' | 'accent' | 'subtle' = 'default';
  @Input() showDot = false;
}
