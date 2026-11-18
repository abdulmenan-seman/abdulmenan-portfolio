import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'" class="mb-10 sm:mb-14">
      @if (eyebrow) {
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface border border-theme shadow-xs mb-3.5">
          <span class="w-1.5 h-1.5 rounded-full bg-theme-accent"></span>
          <span class="font-mono text-xs font-semibold tracking-widest uppercase text-theme-accent">{{ eyebrow }}</span>
        </div>
      }
      <h2 class="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-theme-main leading-[1.15]">
        {{ title }}
      </h2>
      @if (subtitle) {
        <p class="mt-3 text-sm sm:text-base lg:text-lg text-theme-muted leading-relaxed max-w-2xl" [class.mx-auto]="align === 'center'">
          {{ subtitle }}
        </p>
      }
    </div>
  `
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' = 'left';
}
