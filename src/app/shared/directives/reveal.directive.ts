import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Scroll-reveal directive using IntersectionObserver.
 * Adds 'revealed' class when element enters viewport.
 * Usage: <div appReveal> or <div appReveal [revealDelay]="200">
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay: number = 0;
  @Input() revealThreshold: number = 0.12;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      this.el.nativeElement.classList.add('revealed');
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      this.el.nativeElement.classList.add('revealed');
      return;
    }

    this.el.nativeElement.classList.add('reveal-hidden');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.el.nativeElement.classList.remove('reveal-hidden');
              this.el.nativeElement.classList.add('revealed');
            }, this.revealDelay);
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
