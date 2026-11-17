import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES } from '../../data/experience.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  LucideAngularModule,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin
} from 'lucide-angular';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, TechBadgeComponent, LucideAngularModule, RevealDirective],
  template: `
    <section id="experience" class="py-20 lg:py-28 relative bg-theme-elevated/40 border-t border-theme">
      <div class="site-container">

        <div appReveal>
          <app-section-heading
            eyebrow="MY JOURNEY"
            title="Learning, building, and growing."
            subtitle="A verified chronological record of my computer science education, full-stack software training, and engineering internship.">
          </app-section-heading>
        </div>

        <!-- Vertical Timeline -->
        <div class="relative max-w-4xl mx-auto">

          <!-- Timeline line — uses CSS variable for accent color (light/dark safe) -->
          <div
            class="absolute left-4 sm:left-8 top-3 bottom-3 w-px pointer-events-none"
            style="background: linear-gradient(to bottom, var(--accent), var(--border), var(--border));"></div>

          <div class="space-y-10 sm:space-y-12">
            @for (item of experiences; track item.id; let idx = $index) {
              <div appReveal [revealDelay]="idx * 100" class="relative flex items-start gap-5 sm:gap-10">

                <!-- Timeline Node -->
                <div
                  class="relative z-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-300 flex-shrink-0"
                  [ngClass]="idx === 0
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)] shadow-md'
                    : 'bg-theme-surface text-theme-muted border-theme shadow-xs'">
                  @switch (item.type) {
                    @case ('training') { <lucide-icon [img]="AwardIcon" class="w-4 h-4"></lucide-icon> }
                    @case ('internship') { <lucide-icon [img]="BriefcaseIcon" class="w-4 h-4"></lucide-icon> }
                    @case ('education') { <lucide-icon [img]="GraduationCapIcon" class="w-4 h-4"></lucide-icon> }
                    @default { <lucide-icon [img]="BriefcaseIcon" class="w-4 h-4"></lucide-icon> }
                  }
                </div>

                <!-- Entry Card -->
                <div class="flex-1 p-6 sm:p-7 rounded-2xl bg-theme-surface border border-theme hover:border-[var(--accent)]/40 transition-all space-y-4 glow-card">

                  <!-- Header -->
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b border-theme">
                    <div>
                      <span class="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--accent)] font-bold">
                        @if (idx === 0) {
                          <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                        }
                        {{ item.organization }}
                      </span>
                      <h3 class="font-display font-bold text-lg sm:text-2xl text-theme-main mt-0.5">
                        {{ item.title }}
                      </h3>
                      <p class="font-mono text-xs text-theme-muted">{{ item.role }}</p>
                    </div>
                    <div class="flex flex-col sm:items-end text-xs font-mono text-theme-subtle">
                      <span class="flex items-center gap-1.5 text-theme-main font-medium">
                        <lucide-icon [img]="CalendarIcon" class="w-3.5 h-3.5 text-[var(--accent)]"></lucide-icon>
                        <span>{{ item.period }}</span>
                      </span>
                      <span class="flex items-center gap-1 mt-0.5">
                        <lucide-icon [img]="MapPinIcon" class="w-3 h-3"></lucide-icon>
                        <span>{{ item.location }}</span>
                      </span>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-xs sm:text-sm text-theme-muted leading-relaxed">{{ item.description }}</p>

                  <!-- Highlights -->
                  <ul class="space-y-1.5 text-xs sm:text-sm text-theme-main/90">
                    @for (hl of item.highlights; track hl) {
                      <li class="flex items-start gap-2">
                        <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0"></span>
                        <span class="leading-relaxed">{{ hl }}</span>
                      </li>
                    }
                  </ul>

                  <!-- Badges & Metrics -->
                  <div class="pt-2 flex flex-wrap items-center justify-between gap-2">
                    @if (item.technologies && item.technologies.length > 0) {
                      <div class="flex flex-wrap gap-1.5">
                        @for (tech of item.technologies; track tech) {
                          <app-tech-badge variant="subtle">{{ tech }}</app-tech-badge>
                        }
                      </div>
                    }
                    @if (item.metrics && item.metrics.length > 0) {
                      <div class="flex items-center gap-2">
                        @for (metric of item.metrics; track metric.label) {
                          <span class="px-2.5 py-1 rounded-lg bg-theme-elevated border border-theme text-[10px] font-mono text-[var(--accent)] font-bold">
                            {{ metric.label }}: {{ metric.value }}
                          </span>
                        }
                      </div>
                    }
                  </div>

                </div>
              </div>
            }
          </div>

        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;

  readonly BriefcaseIcon = Briefcase;
  readonly GraduationCapIcon = GraduationCap;
  readonly AwardIcon = Award;
  readonly CalendarIcon = Calendar;
  readonly MapPinIcon = MapPin;
}
