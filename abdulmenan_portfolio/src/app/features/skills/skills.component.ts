import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import { SkillCategory } from '../../core/models/skill.model';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  LucideAngularModule,
  Server,
  Layout,
  Database,
  Smartphone,
  Cpu,
  Palette,
  CheckCircle2,
  Layers
} from 'lucide-angular';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, LucideAngularModule, RevealDirective],
  template: `
    <section id="skills" class="py-20 lg:py-28 relative bg-theme-elevated/40 border-y border-theme">
      <div class="site-container">

        <div appReveal>
          <app-section-heading
            eyebrow="MY TOOLKIT"
            title="Technologies I work with."
            subtitle="A focused view of the backend, frontend, database, and mobile technologies I use to build dependable production systems.">
          </app-section-heading>
        </div>

        <!-- Category Filter Tabs -->
        <div appReveal [revealDelay]="80" class="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-theme">
          <button
            type="button"
            (click)="selectCategory('all')"
            class="px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-200"
            [ngClass]="selectedCategoryId() === 'all'
              ? 'bg-[var(--accent)] text-[var(--accent-contrast)] shadow-xs'
              : 'bg-theme-surface text-theme-muted hover:text-theme-main hover:bg-theme-surface-hover border border-theme'">
            All Technologies ({{ totalSkillsCount }})
          </button>

          @for (cat of categories; track cat.id) {
            <button
              type="button"
              (click)="selectCategory(cat.id)"
              class="px-4 py-2 rounded-xl font-mono text-xs font-medium transition-all duration-200"
              [ngClass]="selectedCategoryId() === cat.id
                ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-bold shadow-xs'
                : 'bg-theme-surface text-theme-muted hover:text-theme-main hover:bg-theme-surface-hover border border-theme'">
              {{ cat.title }}
            </button>
          }
        </div>

        <!-- Skills Grid -->
        <div appReveal [revealDelay]="120" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          @for (cat of filteredCategories(); track cat.id) {
            <div class="p-6 rounded-2xl bg-theme-surface border border-theme hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col justify-between shadow-xs group">

              <div>
                <!-- Category Header -->
                <div class="flex items-center justify-between pb-4 mb-5 border-b border-theme">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center border border-theme bg-theme-elevated text-[var(--accent)] group-hover:border-[var(--accent)]/60 transition-colors shadow-xs">
                      @switch (cat.iconName) {
                        @case ('server') { <lucide-icon [img]="ServerIcon" class="w-5 h-5"></lucide-icon> }
                        @case ('layout') { <lucide-icon [img]="LayoutIcon" class="w-5 h-5"></lucide-icon> }
                        @case ('database') { <lucide-icon [img]="DatabaseIcon" class="w-5 h-5"></lucide-icon> }
                        @case ('smartphone') { <lucide-icon [img]="SmartphoneIcon" class="w-5 h-5"></lucide-icon> }
                        @case ('cpu') { <lucide-icon [img]="CpuIcon" class="w-5 h-5"></lucide-icon> }
                        @case ('palette') { <lucide-icon [img]="PaletteIcon" class="w-5 h-5"></lucide-icon> }
                        @default { <lucide-icon [img]="LayersIcon" class="w-5 h-5"></lucide-icon> }
                      }
                    </div>
                    <div>
                      <h3 class="font-display font-bold text-base text-theme-main group-hover:text-[var(--accent)] transition-colors">
                        {{ cat.title }}
                      </h3>
                      <p class="font-mono text-[11px] text-theme-subtle">{{ cat.subtitle }}</p>
                    </div>
                  </div>
                  <span class="font-mono text-xs text-theme-subtle">{{ cat.skills.length }}</span>
                </div>

                <!-- Skills badges -->
                <div class="flex flex-wrap gap-2">
                  @for (skill of cat.skills; track skill.name) {
                    <div
                      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200"
                      [ngClass]="skill.isPrimary
                        ? 'bg-[var(--accent)]/12 border border-[var(--accent)]/30 text-[var(--accent)] font-semibold hover:scale-105'
                        : 'bg-theme-elevated border border-theme text-theme-main hover:border-[var(--accent)]/40'">
                      @if (skill.isPrimary) {
                        <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                      }
                      <span>{{ skill.name }}</span>
                    </div>
                  }
                </div>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;
  readonly selectedCategoryId = signal<string>('all');

  readonly ServerIcon = Server;
  readonly LayoutIcon = Layout;
  readonly DatabaseIcon = Database;
  readonly SmartphoneIcon = Smartphone;
  readonly CpuIcon = Cpu;
  readonly PaletteIcon = Palette;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly LayersIcon = Layers;

  get totalSkillsCount(): number {
    return this.categories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }

  selectCategory(id: string): void {
    this.selectedCategoryId.set(id);
  }

  filteredCategories(): SkillCategory[] {
    const id = this.selectedCategoryId();
    return id === 'all' ? this.categories : this.categories.filter(c => c.id === id);
  }
}
