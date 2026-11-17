import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../core/config/site.config';
import { NAVIGATION_ITEMS } from '../../data/navigation.data';
import { ScrollService } from '../../core/services/scroll.service';
import { LucideAngularModule, Github, Linkedin, Mail, ArrowUp } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <footer class="relative bg-theme-base border-t border-theme pt-12 pb-10 overflow-hidden">
      <div class="site-container">

        <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-theme">

          <!-- Brand -->
          <div class="flex items-center gap-3.5">
            <div class="w-10 h-10 rounded-xl overflow-hidden border border-theme bg-theme-surface flex-shrink-0 shadow-xs">
              <img src="/logo.jpg" alt="Abdulmenan Seman" class="w-full h-full object-cover" />
            </div>
            <div>
              <span class="font-display font-bold text-base text-theme-main block">{{ siteConfig.name }}</span>
              <span class="font-mono text-xs text-[var(--accent)] font-medium">{{ siteConfig.role }}</span>
            </div>
          </div>

          <!-- Nav -->
          <nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs text-theme-muted" aria-label="Footer Navigation">
            @for (item of navItems; track item.href) {
              <a
                [href]="item.href"
                (click)="onNavigate($event, item.href)"
                class="hover:text-[var(--accent)] transition-colors">
                {{ item.label }}
              </a>
            }
          </nav>

          <!-- Social -->
          <div class="flex items-center gap-2.5">
            <a
              [href]="siteConfig.social.github"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-theme-surface border border-theme flex items-center justify-center text-theme-muted hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-colors shadow-xs"
              aria-label="GitHub Profile">
              <lucide-icon [img]="GithubIcon" class="w-4 h-4"></lucide-icon>
            </a>
            <a
              [href]="siteConfig.social.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-theme-surface border border-theme flex items-center justify-center text-theme-muted hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-colors shadow-xs"
              aria-label="LinkedIn Profile">
              <lucide-icon [img]="LinkedinIcon" class="w-4 h-4"></lucide-icon>
            </a>
            <a
              [href]="siteConfig.social.email"
              class="w-9 h-9 rounded-xl bg-theme-surface border border-theme flex items-center justify-center text-theme-muted hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-colors shadow-xs"
              aria-label="Send Email">
              <lucide-icon [img]="MailIcon" class="w-4 h-4"></lucide-icon>
            </a>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-theme-subtle">
          <p>
            &copy; {{ currentYear }} {{ siteConfig.name }}. Built with Angular &bull; Powered by .NET.
          </p>
          <button
            type="button"
            (click)="scrollToTop()"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-theme-surface border border-theme text-theme-muted hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shadow-xs"
            aria-label="Scroll back to top">
            <span>Top</span>
            <lucide-icon [img]="ArrowUpIcon" class="w-3.5 h-3.5"></lucide-icon>
          </button>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  private readonly scrollService = inject(ScrollService);

  readonly siteConfig = SITE_CONFIG;
  readonly navItems = NAVIGATION_ITEMS;
  readonly currentYear = new Date().getFullYear();

  readonly GithubIcon = Github;
  readonly LinkedinIcon = Linkedin;
  readonly MailIcon = Mail;
  readonly ArrowUpIcon = ArrowUp;

  onNavigate(event: Event, href: string): void {
    event.preventDefault();
    this.scrollService.scrollTo(href);
  }

  scrollToTop(): void {
    this.scrollService.scrollTo('#home');
  }
}
