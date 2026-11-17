import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.model';
import { TechBadgeComponent } from '../../../shared/components/tech-badge/tech-badge.component';
import { 
  LucideAngularModule, 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  AlertCircle, 
  UserCheck, 
  Cpu 
} from 'lucide-angular';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule, TechBadgeComponent, LucideAngularModule],
  template: `
    @if (project) {
      <div 
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="project.title + ' Case Study'">
        
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          (click)="close()">
        </div>

        <!-- Modal Dialog Window -->
        <div 
          class="relative w-full max-w-4xl bg-theme-elevated border border-theme rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto glow-card">
          
          <!-- Top Header Bar -->
          <div class="flex items-center justify-between px-5 sm:px-6 py-4 bg-theme-surface border-b border-theme flex-shrink-0">
            <div class="flex items-center gap-2.5 sm:gap-3">
              <span class="w-3 h-3 rounded-full" [style.backgroundColor]="project.accentColor"></span>
              <span class="font-mono text-xs uppercase tracking-wider text-theme-muted font-semibold">{{ project.category }}</span>
              <span class="text-theme-subtle">&bull;</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--accent)]/15 text-theme-accent border border-[var(--accent)]/30 font-bold">
                CASE STUDY
              </span>
            </div>

            <button 
              type="button" 
              (click)="close()"
              class="p-2 rounded-xl text-theme-muted hover:text-theme-main hover:bg-theme-surface-hover transition-colors focus:outline-none"
              aria-label="Close Case Study">
              <lucide-icon [img]="XIcon" class="w-5 h-5"></lucide-icon>
            </button>
          </div>

          <!-- Scrollable Content Body -->
          <div class="overflow-y-auto p-5 sm:p-8 space-y-6 sm:space-y-8 text-theme-muted">
            
            <!-- Hero Title & Summary -->
            <div class="space-y-3">
              <h3 class="font-display text-2xl sm:text-4xl font-extrabold text-theme-main">
                {{ project.title }}
              </h3>
              <p class="text-sm sm:text-base text-theme-main font-medium leading-relaxed">
                {{ project.summary }}
              </p>
              <p class="text-xs sm:text-sm leading-relaxed text-theme-muted">
                {{ project.description }}
              </p>

              <!-- Tech Badges -->
              <div class="flex flex-wrap gap-2 pt-1">
                @for (tech of project.technologies; track tech) {
                  <app-tech-badge variant="default">{{ tech }}</app-tech-badge>
                }
              </div>
            </div>

            <!-- Problem vs Solution Two-Column Block -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <!-- Problem Statement -->
              <div class="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme space-y-2 shadow-xs">
                <div class="flex items-center gap-2 text-red-500 font-semibold">
                  <lucide-icon [img]="AlertCircleIcon" class="w-4 h-4"></lucide-icon>
                  <h4 class="font-mono text-xs uppercase tracking-wider">The Problem</h4>
                </div>
                <p class="text-xs sm:text-sm leading-relaxed text-theme-muted">
                  {{ project.problem }}
                </p>
              </div>

              <!-- Proposed Solution -->
              <div class="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme space-y-2 shadow-xs">
                <div class="flex items-center gap-2 text-theme-accent font-semibold">
                  <lucide-icon [img]="CheckCircle2Icon" class="w-4 h-4"></lucide-icon>
                  <h4 class="font-mono text-xs uppercase tracking-wider">The Solution</h4>
                </div>
                <p class="text-xs sm:text-sm leading-relaxed text-theme-muted">
                  {{ project.solution }}
                </p>
              </div>

            </div>

            <!-- Key Features Implemented -->
            <div class="space-y-3">
              <h4 class="font-display font-bold text-base sm:text-lg text-theme-main flex items-center gap-2">
                <lucide-icon [img]="LayersIcon" class="w-4 h-4 text-theme-accent"></lucide-icon>
                <span>Key Features</span>
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                @for (feat of project.features; track feat) {
                  <div class="p-3 rounded-xl bg-theme-surface border border-theme flex items-start gap-2.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-theme-accent mt-1.5 flex-shrink-0"></span>
                    <span class="text-xs sm:text-sm text-theme-main leading-relaxed">{{ feat }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Architecture Overview -->
            <div class="space-y-3">
              <h4 class="font-display font-bold text-base sm:text-lg text-theme-main flex items-center gap-2">
                <lucide-icon [img]="CpuIcon" class="w-4 h-4 text-sky-400"></lucide-icon>
                <span>Architecture & Engineering Decisions</span>
              </h4>
              <div class="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme space-y-2.5 font-mono text-xs">
                @for (arch of project.architecture; track arch) {
                  <div class="flex items-start gap-2 text-theme-muted">
                    <span class="text-sky-400 select-none font-bold">&rarr;</span>
                    <span class="leading-relaxed">{{ arch }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- My Role & Challenges -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <!-- Personal Contribution -->
              <div class="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme space-y-2 shadow-xs">
                <div class="flex items-center gap-2 text-theme-main">
                  <lucide-icon [img]="UserCheckIcon" class="w-4 h-4 text-theme-accent"></lucide-icon>
                  <h4 class="font-mono text-xs uppercase font-bold tracking-wider">My Role</h4>
                </div>
                <p class="text-xs sm:text-sm leading-relaxed text-theme-muted">
                  {{ project.myRole }}
                </p>
              </div>

              <!-- Challenges & Learnings -->
              <div class="p-4 sm:p-5 rounded-2xl bg-theme-surface border border-theme space-y-2 shadow-xs">
                <h4 class="font-mono text-xs uppercase font-bold tracking-wider text-theme-main">Key Challenges</h4>
                <ul class="space-y-1.5 text-xs text-theme-muted">
                  @for (c of project.challenges; track c) {
                    <li class="flex items-start gap-2">
                      <span class="text-theme-accent select-none font-bold">&bull;</span>
                      <span class="leading-relaxed">{{ c }}</span>
                    </li>
                  }
                </ul>
              </div>

            </div>

          </div>

          <!-- Modal Action Footer -->
          <div class="px-5 sm:px-6 py-4 bg-theme-surface border-t border-theme flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
            <div class="flex items-center gap-2 font-mono text-xs text-theme-subtle">
              <span>STATUS:</span>
              <span class="text-theme-accent uppercase font-bold">{{ project.status }}</span>
            </div>

            <div class="flex items-center gap-3">
              @if (project.githubUrl) {
                <a 
                  [href]="project.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-theme-elevated hover:bg-theme-surface-hover border border-theme text-theme-main font-mono text-xs font-semibold transition-colors">
                  <lucide-icon [img]="GithubIcon" class="w-4 h-4"></lucide-icon>
                  <span>Repository</span>
                </a>
              }
              <button 
                type="button" 
                (click)="close()"
                class="px-4 py-2 rounded-xl bg-theme-accent text-[var(--accent-contrast)] font-mono text-xs font-bold transition-opacity hover:opacity-90">
                Close
              </button>
            </div>
          </div>

        </div>
      </div>
    }
  `
})
export class ProjectDetailModalComponent {
  @Input() project: Project | null = null;
  @Output() closed = new EventEmitter<void>();

  readonly XIcon = X;
  readonly GithubIcon = Github;
  readonly ExternalLinkIcon = ExternalLink;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly LayersIcon = Layers;
  readonly AlertCircleIcon = AlertCircle;
  readonly UserCheckIcon = UserCheck;
  readonly CpuIcon = Cpu;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.closed.emit();
  }
}
