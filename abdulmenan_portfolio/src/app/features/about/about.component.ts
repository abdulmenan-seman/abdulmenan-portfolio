import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from '../../data/profile.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  LucideAngularModule,
  Lightbulb,
  MapPin,
  Monitor,
  Server
} from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, LucideAngularModule, RevealDirective],
  template: `
    <section id="about" class="relative py-20 lg:py-28">
      <div class="site-container">
        <div appReveal>
          <app-section-heading
            eyebrow="ABOUT ME"
            title="Building Scalable Software Solutions"
            align="center">
          </app-section-heading>
        </div>

        <div class="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          <div appReveal class="group relative isolate md:flex md:h-full">
            <div class="absolute -inset-4 -z-10 rounded-[2rem] bg-[var(--accent)]/15 blur-3xl transition-opacity duration-500 group-hover:bg-[var(--accent)]/25"></div>
            <div class="relative overflow-hidden rounded-[1.75rem] border border-[var(--accent)]/25 bg-theme-elevated/70 p-2 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 md:flex-1">
              <div class="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.25rem] bg-theme-surface px-6 text-center md:aspect-auto md:h-full">
                <div class="absolute inset-0 bg-tech-grid opacity-50"></div>
                <div class="absolute -left-12 top-1/4 h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-3xl"></div>
                <div class="relative z-10 max-w-sm">
                  <span class="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Engineering Principle
                  </span>
                  <blockquote class="mt-4 font-display text-2xl font-semibold leading-snug text-theme-main sm:text-3xl">
                    I care about systems that <span class="text-gradient-accent">hold up after the demo.</span>
                  </blockquote>
                </div>
                <div class="absolute bottom-5 left-5 right-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/35 px-3.5 py-3 text-white backdrop-blur-md">
                  <lucide-icon [img]="MapPinIcon" class="h-4 w-4 text-[var(--accent)]"></lucide-icon>
                  <span class="text-sm font-medium">{{ profile.location }}</span>
                </div>
              </div>
            </div>
          </div>

          <div appReveal [revealDelay]="100" class="flex flex-col justify-center py-2 md:py-4">
            <span class="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Software Developer
            </span>
            <h3 class="font-display text-4xl font-bold tracking-tight text-theme-main sm:text-5xl">
              {{ profile.name }}
            </h3>
            <p class="mt-2 text-lg font-medium text-theme-muted sm:text-xl">{{ profile.title }}</p>

            <p class="mt-6 max-w-2xl text-left text-sm leading-relaxed text-theme-muted sm:text-base">
              {{ profile.summary }}
            </p>

            <div class="mt-7">
              <p class="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-theme-subtle">
                Technologies I work with
              </p>
              <div class="flex flex-wrap gap-2">
                @for (technology of profile.technologies; track technology) {
                  <span class="rounded-full border border-theme bg-theme-surface/75 px-3 py-1.5 font-mono text-xs font-medium text-theme-main transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]">
                    {{ technology }}
                  </span>
                }
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          @for (capability of capabilities; track capability.title; let index = $index) {
            <article
              appReveal
              [revealDelay]="index * 80"
              class="group rounded-2xl border border-theme bg-theme-surface/65 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--accent)]/40 hover:shadow-[0_16px_40px_-24px_var(--accent)] sm:p-6">
              <div class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)]/15">
                <lucide-icon [img]="capability.icon" class="h-5 w-5"></lucide-icon>
              </div>
              <h4 class="font-display text-lg font-bold text-theme-main">{{ capability.title }}</h4>
              <p class="mt-2 text-sm leading-relaxed text-theme-muted">{{ capability.description }}</p>
            </article>
          }
        </div>

        <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          @for (stat of profile.stats; track stat.label; let index = $index) {
            <div
              appReveal
              [revealDelay]="index * 80"
              class="rounded-2xl border border-[var(--accent)]/15 bg-gradient-to-br from-[var(--accent)]/[0.08] via-theme-surface/70 to-theme-elevated/70 p-5 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/35 sm:p-6">
              <p class="font-display text-3xl font-bold tracking-tight text-[var(--accent)] sm:text-4xl">{{ stat.value }}</p>
              <p class="mt-1 font-mono text-xs font-medium uppercase tracking-wider text-theme-muted">{{ stat.label }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  readonly profile = PROFILE_DATA;
  readonly MapPinIcon = MapPin;
  readonly capabilities = [
    {
      title: 'Backend Development',
      description: 'Building scalable APIs, authentication systems, and enterprise-grade backend architectures.',
      icon: Server
    },
    {
      title: 'Frontend Engineering',
      description: 'Developing responsive Angular applications with modern UI/UX principles.',
      icon: Monitor
    },
    {
      title: 'Problem Solving',
      description: 'Converting complex requirements into practical and maintainable solutions.',
      icon: Lightbulb
    }
  ];
}
