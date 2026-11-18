import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../core/services/scroll.service';
import {
  LucideAngularModule,
  ArrowUpRight,
  ArrowDown,
  Braces,
  Cloud,
  Code2,
  Database,
  Layers,
  Lightbulb,
  Monitor,
  Server,
  Smartphone
} from 'lucide-angular';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section
      id="home"
      class="relative min-h-screen flex items-center overflow-hidden"
      style="padding-top: 5rem; padding-bottom: 4rem;">

      <!-- ═══════════════════════════════════════
           CINEMATIC BACKGROUND LAYER
      ════════════════════════════════════════ -->

      <!-- Base grid texture (full section) -->
      <div class="absolute inset-0 bg-tech-grid opacity-100 pointer-events-none z-0"></div>

      <!-- Lime radial glow — behind the network graphic -->
      <div
        #glowLime
        class="hero-glow-lime hero-glow-animate z-0"
        style="top: 15%; left: 48%;"></div>

      <!-- Cyan ambient accent — opposite side -->
      <div
        #glowCyan
        class="hero-glow-cyan z-0"
        style="top: 50%; right: -4%; animation: heroGlowDrift 15s ease-in-out infinite reverse;"></div>

      <!-- Soft vignette overlay — frames the composition -->
      <div
        class="absolute inset-0 pointer-events-none z-0"
        style="background: radial-gradient(ellipse 85% 85% at 58% 50%, transparent 40%, var(--bg-base) 100%);"></div>

      <!-- Bottom fade to next section -->
      <div
        class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0"
        style="background: linear-gradient(to bottom, transparent, var(--bg-base));"></div>

      <!-- ═══════════════════════════════════════
           CONTENT
      ════════════════════════════════════════ -->
      <div class="site-container relative z-10 w-full">
        <div class="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <div class="relative z-10 text-left">
            <div #heroAvail class="hero-item mb-6 inline-flex items-center gap-2.5 rounded-full border border-theme bg-theme-surface/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span class="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-70"></span>
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]"></span>
              </span>
              <span class="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Available for Opportunities
              </span>
            </div>

            <p #heroEyebrow class="hero-item mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-theme-muted sm:mb-5 sm:text-base">
              Hello, I'm <span class="text-theme-main">Abdulmenan Seman</span>
            </p>

            <h1 #heroHeadline class="hero-headline mb-6 text-theme-main sm:mb-8">
              <span class="hero-line block overflow-hidden">
                <span class="hero-line-inner block">Turning ideas into <span class="text-gradient-accent">digital experiences.</span></span>
              </span>
            </h1>

            <div #heroBadges class="hero-item mb-8 flex flex-wrap items-center justify-start gap-2 sm:mb-10">
              <span class="inline-flex items-center gap-1.5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/12 px-3.5 py-1.5 font-mono text-xs font-semibold text-[var(--accent)]">
                <span class="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
                ASP.NET Core
              </span>
              <span class="inline-flex items-center gap-1.5 rounded-lg border border-theme bg-theme-surface px-3.5 py-1.5 font-mono text-xs font-medium text-theme-main">
                Angular
              </span>
              <span class="inline-flex items-center gap-1.5 rounded-lg border border-theme bg-theme-surface px-3.5 py-1.5 font-mono text-xs font-medium text-theme-main">
                Flutter
              </span>
            </div>

            <div #heroCtas class="hero-item mb-10 flex flex-wrap items-center justify-start gap-3.5 sm:mb-12">
              <a
                href="#projects"
                (click)="onNavigate($event, '#projects')"
                class="inline-flex items-center gap-2.5 rounded-xl bg-[var(--accent)] px-7 py-3.5 font-mono text-sm font-bold text-[var(--accent-contrast)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0">
                <span>View My Work</span>
                <lucide-icon [img]="ArrowUpRightIcon" class="h-4 w-4"></lucide-icon>
              </a>

              <a
                href="#contact"
                (click)="onNavigate($event, '#contact')"
                class="inline-flex items-center gap-2.5 rounded-xl border border-theme bg-theme-surface px-7 py-3.5 font-mono text-sm font-semibold text-theme-main transition-all duration-200 hover:-translate-y-0.5 hover:bg-theme-surface-hover active:translate-y-0">
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          <div
            #networkVisual
            class="network-visual relative mx-auto aspect-square w-full max-w-[30rem] lg:ml-auto"
            aria-hidden="true">
            <div class="network-orbit network-orbit-outer"></div>
            <div class="network-orbit network-orbit-inner"></div>

            <svg class="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
              @for (node of networkNodes; track node.title) {
                <line
                  class="network-connection"
                  x1="50"
                  y1="50"
                  [attr.x2]="node.x"
                  [attr.y2]="node.y"
                  [attr.opacity]="activeNode && activeNode !== node.title ? 0.1 : 0.48">
                </line>
                <circle
                  class="network-endpoint"
                  [attr.cx]="node.x"
                  [attr.cy]="node.y"
                  r="0.55">
                </circle>
              }
            </svg>

            @for (node of networkNodes; track node.title) {
              <div
                class="network-node absolute z-10 -translate-x-1/2 -translate-y-1/2"
                [ngClass]="activeNode === node.title ? 'network-node-active' : ''"
                [style.left.%]="node.x"
                [style.top.%]="node.y"
                (mouseenter)="activeNode = node.title"
                (mouseleave)="activeNode = null">
                <div class="network-node-face flex h-12 w-12 flex-col items-center justify-center rounded-full border border-[var(--accent)]/25 bg-theme-elevated/90 px-1 text-center shadow-lg backdrop-blur-md sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <lucide-icon [img]="node.icon" class="mb-1 h-3 w-3 text-[var(--accent)] sm:h-3.5 sm:w-3.5"></lucide-icon>
                  <span class="font-display text-[8px] font-bold leading-tight text-theme-main sm:text-[10px]">{{ node.title }}</span>
                  <span class="mt-0.5 hidden max-w-[6rem] text-[8px] leading-tight text-theme-muted sm:block">{{ node.caption }}</span>
                </div>
              </div>
            }

            <div class="network-core absolute left-1/2 top-1/2 z-20 flex h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[var(--accent)]/80 bg-theme-base/95 p-2 text-center shadow-[0_0_40px_-8px_var(--accent)] sm:h-[6.5rem] sm:w-[6.5rem] lg:h-[7.5rem] lg:w-[7.5rem]">
              <div class="network-core-ring absolute inset-2 rounded-full border border-dashed border-[var(--accent)]/40"></div>
              <div class="relative flex flex-col items-center">
                <div class="mb-1 flex h-6 w-6 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] sm:h-7 sm:w-7">
                  <lucide-icon [img]="CodeIcon" class="h-3 w-3 sm:h-3.5 sm:w-3.5"></lucide-icon>
                </div>
                <span class="font-display text-[11px] font-bold text-theme-main sm:text-xs">Abdulmenan</span>
                <span class="mt-1 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-0.5 font-mono text-[8px] font-semibold tracking-widest text-[var(--accent)] sm:text-[9px]">
                  DEVELOPER
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div
        #heroScroll
        class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-theme-subtle opacity-0">
        <span class="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <lucide-icon [img]="ArrowDownIcon" class="w-4 h-4 animate-bounce"></lucide-icon>
      </div>

    </section>
  `
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroAvail') private heroAvail!: ElementRef<HTMLElement>;
  @ViewChild('heroEyebrow') private heroEyebrow!: ElementRef<HTMLElement>;
  @ViewChild('heroHeadline') private heroHeadline!: ElementRef<HTMLElement>;
  @ViewChild('heroBadges') private heroBadges!: ElementRef<HTMLElement>;
  @ViewChild('heroCtas') private heroCtas!: ElementRef<HTMLElement>;
  @ViewChild('heroScroll') private heroScroll!: ElementRef<HTMLElement>;
  @ViewChild('glowLime') private glowLime!: ElementRef<HTMLElement>;
  @ViewChild('networkVisual') private networkVisual!: ElementRef<HTMLElement>;

  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly ArrowDownIcon = ArrowDown;
  readonly CodeIcon = Code2;
  readonly networkNodes = [
    { title: 'ASP.NET Core', caption: 'Scalable Backend', icon: Server, x: 50, y: 11 },
    { title: 'Web Development', caption: 'Modern UI/UX', icon: Code2, x: 82, y: 20 },
    { title: 'Clean Architecture', caption: 'Maintainable Systems', icon: Layers, x: 89, y: 50 },
    { title: 'Problem Solver', caption: 'Turning Ideas Into Products', icon: Lightbulb, x: 82, y: 80 },
    { title: 'Cloud & DevOps', caption: 'Deploy · Scale · Maintain', icon: Cloud, x: 50, y: 89 },
    { title: 'Flutter', caption: 'Cross-Platform Apps', icon: Smartphone, x: 18, y: 80 },
    { title: 'PostgreSQL', caption: 'Reliable Data Architecture', icon: Database, x: 11, y: 50 },
    { title: 'Angular', caption: 'Modern Reactive Frontends', icon: Braces, x: 18, y: 20 }
  ];

  activeNode: string | null = null;

  private heroTimeline?: gsap.core.Timeline;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Instantly show everything
      [
        this.heroAvail, this.heroEyebrow, this.heroHeadline,
        this.heroBadges, this.heroCtas, this.heroScroll
      ].forEach(ref => {
        if (ref?.nativeElement) {
          ref.nativeElement.style.opacity = '1';
        }
      });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    this.heroTimeline = tl;

    // 1. Glow fade-in (ambient atmosphere first)
    if (this.glowLime?.nativeElement) {
      gsap.fromTo(this.glowLime.nativeElement,
        { opacity: 0 },
        { opacity: 1, duration: 1.8, ease: 'power1.out', delay: 0.1 }
      );
    }

    tl.fromTo(
      this.networkVisual.nativeElement,
      { opacity: 0, scale: 0.94 },
      { opacity: 1, scale: 1, duration: 0.9 },
      0.3
    );

    // 2. Availability badge
    tl.fromTo(
      this.heroAvail.nativeElement,
      { opacity: 0, y: 14, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.55 },
      0.2
    );

    // 3. Eyebrow
    tl.fromTo(
      this.heroEyebrow.nativeElement,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.38
    );

    // 4. Headline — line by line reveal (clip effect)
    const lines = this.heroHeadline.nativeElement.querySelectorAll('.hero-line-inner');
    tl.fromTo(
      lines,
      { yPercent: 105, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.72, stagger: 0.14, ease: 'power4.out' },
      0.52
    );

    // 5. Tech badges
    tl.fromTo(
      this.heroBadges.nativeElement,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5 },
      1.1
    );

    // 6. CTA buttons
    tl.fromTo(
      this.heroCtas.nativeElement,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5 },
      1.22
    );

    // 7. Scroll hint
    tl.fromTo(
      this.heroScroll.nativeElement,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      1.6
    );
  }

  ngOnDestroy(): void {
    this.heroTimeline?.kill();
  }

  onNavigate(event: Event, href: string): void {
    event.preventDefault();
    this.scrollService.scrollTo(href);
  }
}
