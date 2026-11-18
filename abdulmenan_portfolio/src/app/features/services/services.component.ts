import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../data/services.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ScrollService } from '../../core/services/scroll.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  LucideAngularModule,
  Layers,
  Server,
  Layout,
  Database,
  Smartphone,
  Palette,
  ArrowUpRight
} from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, LucideAngularModule, RevealDirective],
  template: `
    <section id="services" class="py-20 lg:py-28 relative">
      <div class="site-container">

        <div appReveal>
          <app-section-heading
            eyebrow="SERVICES & EXPERTISE"
            title="From idea to working software."
            subtitle="Engineering practical digital products with reliable backend APIs, reactive Angular frontends, and cross-platform mobile architectures.">
          </app-section-heading>
        </div>

        <!-- Services Grid -->
        <div appReveal [revealDelay]="80" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 reveal-stagger">
          @for (service of services; track service.id) {
            <div class="group p-6 sm:p-7 rounded-2xl bg-theme-elevated border border-theme hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 glow-card">

              <div class="space-y-4">
                <!-- Icon & Badge -->
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-theme-surface border border-theme text-[var(--accent)] group-hover:border-[var(--accent)]/60 transition-colors shadow-xs">
                    @switch (service.icon) {
                      @case ('layers') { <lucide-icon [img]="LayersIcon" class="w-6 h-6"></lucide-icon> }
                      @case ('server') { <lucide-icon [img]="ServerIcon" class="w-6 h-6"></lucide-icon> }
                      @case ('layout') { <lucide-icon [img]="LayoutIcon" class="w-6 h-6"></lucide-icon> }
                      @case ('database') { <lucide-icon [img]="DatabaseIcon" class="w-6 h-6"></lucide-icon> }
                      @case ('smartphone') { <lucide-icon [img]="SmartphoneIcon" class="w-6 h-6"></lucide-icon> }
                      @case ('palette') { <lucide-icon [img]="PaletteIcon" class="w-6 h-6"></lucide-icon> }
                      @default { <lucide-icon [img]="LayersIcon" class="w-6 h-6"></lucide-icon> }
                    }
                  </div>
                  <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-theme-surface border border-theme text-theme-muted group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors uppercase font-semibold">
                    {{ service.badge }}
                  </span>
                </div>

                <!-- Title & Description -->
                <div>
                  <h3 class="font-display font-bold text-lg sm:text-xl text-theme-main group-hover:text-[var(--accent)] transition-colors mb-2">
                    {{ service.title }}
                  </h3>
                  <p class="text-xs sm:text-sm text-theme-muted leading-relaxed">
                    {{ service.shortDescription }}
                  </p>
                </div>
              </div>

              <!-- Inquiry link -->
              <div class="pt-6 mt-6 border-t border-theme flex items-center justify-end">
                <a
                  href="#contact"
                  (click)="onNavigate($event, '#contact')"
                  class="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--accent)] hover:underline transition-colors">
                  <span>Inquire</span>
                  <lucide-icon [img]="ArrowUpRightIcon" class="w-3.5 h-3.5"></lucide-icon>
                </a>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  private readonly scrollService = inject(ScrollService);
  readonly services = SERVICES;

  readonly LayersIcon = Layers;
  readonly ServerIcon = Server;
  readonly LayoutIcon = Layout;
  readonly DatabaseIcon = Database;
  readonly SmartphoneIcon = Smartphone;
  readonly PaletteIcon = Palette;
  readonly ArrowUpRightIcon = ArrowUpRight;

  onNavigate(event: Event, href: string): void {
    event.preventDefault();
    this.scrollService.scrollTo(href);
  }
}
