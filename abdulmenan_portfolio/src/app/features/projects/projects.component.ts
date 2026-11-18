import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../core/models/project.model';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { ProjectDetailModalComponent } from './project-detail-modal/project-detail-modal.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  LucideAngularModule,
  ArrowUpRight,
  Github,
  Smartphone,
  ShieldCheck,
  BrainCircuit,
  ShoppingBag,
  Layers
} from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    TechBadgeComponent,
    ProjectDetailModalComponent,
    LucideAngularModule,
    RevealDirective
  ],
  template: `
    <section id="projects" class="py-20 lg:py-28 relative">
      <div class="site-container">

        <div appReveal>
          <app-section-heading
            eyebrow="SELECTED WORK"
            title="Real problems. Practical solutions."
            subtitle="Explore documented software systems engineered with C#, ASP.NET Core, Angular, Flutter, and PostgreSQL. Every project is built to address a tangible challenge.">
          </app-section-heading>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          @for (project of projects; track project.slug; let idx = $index) {
            <div appReveal [revealDelay]="idx * 100">
              <article
                class="group relative rounded-3xl bg-theme-elevated border border-theme hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden glow-card hover:-translate-y-1.5">

                <!-- Card Banner -->
                <div
                  class="relative h-60 sm:h-72 p-6 flex flex-col justify-between overflow-hidden border-b border-theme"
                  [style.background]="getCardGradient(project.accentColor)">

                  <div class="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>

                  <!-- Top Row -->
                  <div class="relative z-10 flex items-center justify-between">
                    <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface/90 backdrop-blur-md border border-theme text-xs font-mono text-theme-main shadow-xs">
                      <span class="w-1.5 h-1.5 rounded-full" [style.backgroundColor]="project.accentColor"></span>
                      <span>{{ project.category }}</span>
                    </span>
                    <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-theme-surface/90 text-[var(--accent)] border border-[var(--accent)]/30 uppercase font-bold tracking-wider shadow-xs">
                      {{ project.status }}
                    </span>
                  </div>

                  <!-- Project Icon -->
                  <div class="relative z-10 flex items-center justify-center py-2">
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center bg-theme-surface/90 backdrop-blur-md border border-theme shadow-xl group-hover:scale-105 transition-transform duration-300">
                      @switch (project.slug) {
                        @case ('fixmycampus') {
                          <lucide-icon [img]="SmartphoneIcon" class="w-10 h-10 text-sky-500"></lucide-icon>
                        }
                        @case ('trustrent') {
                          <lucide-icon [img]="ShieldCheckIcon" class="w-10 h-10 text-[var(--accent)]"></lucide-icon>
                        }
                        @case ('ai-crm') {
                          <lucide-icon [img]="BrainCircuitIcon" class="w-10 h-10 text-purple-500"></lucide-icon>
                        }
                        @case ('mini-market-app') {
                          <lucide-icon [img]="ShoppingBagIcon" class="w-10 h-10 text-amber-500"></lucide-icon>
                        }
                        @default {
                          <lucide-icon [img]="LayersIcon" class="w-10 h-10 text-[var(--accent)]"></lucide-icon>
                        }
                      }
                    </div>
                  </div>

                  <!-- Bottom tech preview -->
                  <div class="relative z-10 flex items-center justify-between text-xs font-mono text-theme-main/90">
                    <span class="bg-theme-surface/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-theme shadow-xs">
                      {{ project.technologies.slice(0, 3).join(' · ') }}
                    </span>
                    <span class="text-[11px] text-theme-subtle">0{{ idx + 1 }} / 04</span>
                  </div>
                </div>

                <!-- Card Body -->
                <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div class="space-y-3">
                    <h3 class="font-display font-bold text-2xl text-theme-main group-hover:text-[var(--accent)] transition-colors">
                      {{ project.title }}
                    </h3>
                    <p class="text-sm text-theme-muted leading-relaxed line-clamp-2">
                      {{ project.summary }}
                    </p>
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      @for (tech of project.technologies; track tech) {
                        <app-tech-badge variant="default">{{ tech }}</app-tech-badge>
                      }
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="pt-4 border-t border-theme flex items-center justify-between">
                    <button
                      type="button"
                      (click)="openCaseStudy(project)"
                      class="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] hover:underline transition-colors focus:outline-none">
                      <span>View Case Study</span>
                      <lucide-icon [img]="ArrowUpRightIcon" class="w-4 h-4"></lucide-icon>
                    </button>
                    @if (project.githubUrl) {
                      <a
                        [href]="project.githubUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="p-2 rounded-xl bg-theme-surface border border-theme text-theme-muted hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors shadow-xs"
                        aria-label="GitHub Repository">
                        <lucide-icon [img]="GithubIcon" class="w-4 h-4"></lucide-icon>
                      </a>
                    }
                  </div>
                </div>

              </article>
            </div>
          }
        </div>

      </div>

      <!-- Modal -->
      <app-project-detail-modal
        [project]="activeProject()"
        (closed)="closeCaseStudy()">
      </app-project-detail-modal>
    </section>
  `
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly activeProject = signal<Project | null>(null);

  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly GithubIcon = Github;
  readonly SmartphoneIcon = Smartphone;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly BrainCircuitIcon = BrainCircuit;
  readonly ShoppingBagIcon = ShoppingBag;
  readonly LayersIcon = Layers;

  openCaseStudy(project: Project): void {
    this.activeProject.set(project);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeCaseStudy(): void {
    this.activeProject.set(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }

  getCardGradient(accentColor: string): string {
    return `linear-gradient(135deg, var(--surface) 0%, var(--bg-elevated) 65%, ${accentColor}18 100%)`;
  }
}
