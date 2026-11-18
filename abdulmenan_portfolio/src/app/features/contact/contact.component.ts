import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  LucideAngularModule,
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  Download,
  MapPin,
  ArrowUpRight
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeadingComponent, LucideAngularModule, RevealDirective],
  template: `
    <section id="contact" class="py-20 lg:py-28 relative">
      <div class="site-container">

        <div appReveal>
          <app-section-heading
            eyebrow="LET'S CONNECT"
            title="Have an idea? Let's build something meaningful.">
          </app-section-heading>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          <!-- Left Column -->
          <div class="lg:col-span-5 space-y-5">

            <div appReveal [revealDelay]="80" class="p-6 sm:p-7 rounded-2xl bg-theme-elevated border border-theme space-y-5 glow-card">
              <h3 class="font-display font-bold text-xl text-theme-main">Direct Channels</h3>

              <!-- Email card -->
              <div class="p-3.5 sm:p-4 rounded-xl bg-theme-surface border border-theme flex items-center justify-between gap-3 shadow-xs">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-10 h-10 rounded-xl bg-theme-elevated border border-theme flex items-center justify-center text-[var(--accent)] flex-shrink-0 shadow-xs">
                    <lucide-icon [img]="MailIcon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <div class="min-w-0">
                    <span class="font-mono text-[10px] text-theme-subtle block uppercase font-semibold">Direct Email</span>
                    <a [href]="'mailto:' + siteConfig.email" class="font-mono text-xs sm:text-sm text-theme-main hover:text-[var(--accent)] truncate block font-medium">
                      {{ siteConfig.email }}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  (click)="copyEmail()"
                  class="p-2 rounded-lg bg-theme-elevated border border-theme text-theme-muted hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-colors flex-shrink-0"
                  [title]="copied() ? 'Copied!' : 'Copy Email Address'"
                  aria-label="Copy Email Address">
                  <lucide-icon [img]="copied() ? CheckIcon : CopyIcon" class="w-4 h-4 text-[var(--accent)]"></lucide-icon>
                </button>
              </div>

              <!-- Location & Status -->
              <div class="space-y-2.5 font-mono text-xs">
                <div class="flex items-center gap-2.5 text-theme-muted">
                  <lucide-icon [img]="MapPinIcon" class="w-4 h-4 text-[var(--accent)]"></lucide-icon>
                  <span>{{ siteConfig.location }} (Available for Remote)</span>
                </div>
                <div class="flex items-center gap-2.5 text-theme-muted">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 ml-1"></span>
                  <span class="text-emerald-500 font-semibold">{{ siteConfig.status }}</span>
                </div>
              </div>

              <!-- Social -->
              <div class="pt-1 grid grid-cols-2 gap-3">
                <a
                  [href]="siteConfig.social.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 rounded-xl bg-theme-surface border border-theme hover:border-[var(--accent)]/50 text-theme-main font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:bg-theme-surface-hover transition-colors shadow-xs">
                  <lucide-icon [img]="LinkedinIcon" class="w-4 h-4 text-sky-500"></lucide-icon>
                  <span>LinkedIn</span>
                </a>
                <a
                  [href]="siteConfig.social.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 rounded-xl bg-theme-surface border border-theme hover:border-[var(--accent)]/50 text-theme-main font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:bg-theme-surface-hover transition-colors shadow-xs">
                  <lucide-icon [img]="GithubIcon" class="w-4 h-4 text-[var(--accent)]"></lucide-icon>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <!-- CV Card -->
            <div appReveal [revealDelay]="160" class="p-5 sm:p-6 rounded-2xl bg-theme-elevated border border-theme flex items-center justify-between gap-4 glow-card">
              <div class="space-y-0.5">
                <h4 class="font-display font-bold text-base text-theme-main">Curriculum Vitae</h4>
                <p class="text-xs text-theme-muted">Full-Stack Software Developer &bull; BSc CS (3.81 GPA)</p>
              </div>
              <a
                href="/Abdulmenan Seman.pdf"
                download="Abdulmenan Seman.pdf"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold transition-opacity hover:opacity-90 shadow-md">
                <lucide-icon [img]="DownloadIcon" class="w-4 h-4"></lucide-icon>
                <span>Request CV</span>
              </a>
            </div>

          </div>

          <!-- Right Column: Form -->
          <div class="lg:col-span-7">
            <div appReveal [revealDelay]="120" class="p-6 sm:p-8 rounded-2xl bg-theme-elevated border border-theme shadow-xl space-y-5 glow-card">

              <div class="flex items-center justify-between pb-3.5 border-b border-theme">
                <div>
                  <h3 class="font-display font-bold text-xl text-theme-main">Send a Message</h3>
                </div>
                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono bg-theme-surface border border-theme text-[var(--accent)] font-semibold">
                  DIRECT DISPATCH
                </span>
              </div>

              <form (submit)="onSubmit($event)" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label for="contact-name" class="block font-mono text-xs font-medium text-theme-main">
                      Your Name <span class="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      [(ngModel)]="formData.name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      class="w-full px-4 py-3 rounded-xl bg-theme-surface border border-theme focus:border-[var(--accent)] text-theme-main font-mono text-xs placeholder:text-theme-subtle focus:outline-none transition-colors shadow-xs"
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label for="contact-email" class="block font-mono text-xs font-medium text-theme-main">
                      Your Email <span class="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      [(ngModel)]="formData.email"
                      name="email"
                      required
                      placeholder="jane&#64;company.com"
                      class="w-full px-4 py-3 rounded-xl bg-theme-surface border border-theme focus:border-[var(--accent)] text-theme-main font-mono text-xs placeholder:text-theme-subtle focus:outline-none transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label for="contact-subject" class="block font-mono text-xs font-medium text-theme-main">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    [(ngModel)]="formData.subject"
                    name="subject"
                    placeholder="Opportunity / Collaboration"
                    class="w-full px-4 py-3 rounded-xl bg-theme-surface border border-theme focus:border-[var(--accent)] text-theme-main font-mono text-xs placeholder:text-theme-subtle focus:outline-none transition-colors shadow-xs"
                  />
                </div>

                <div class="space-y-1.5">
                  <label for="contact-message" class="block font-mono text-xs font-medium text-theme-main">
                    Message <span class="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    [(ngModel)]="formData.message"
                    name="message"
                    required
                    placeholder="Hi Abdulmenan, I'd like to discuss..."
                    class="w-full px-4 py-3 rounded-xl bg-theme-surface border border-theme focus:border-[var(--accent)] text-theme-main font-mono text-xs placeholder:text-theme-subtle focus:outline-none transition-colors resize-y shadow-xs"
                  ></textarea>
                </div>

                <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p class="text-[11px] font-mono text-theme-subtle">
                    Dispatches directly to your email client.
                  </p>
                  <button
                    type="submit"
                    class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] font-mono text-xs font-bold transition-opacity hover:opacity-90 shadow-md">
                    <lucide-icon [img]="SendIcon" class="w-4 h-4"></lucide-icon>
                    <span>Dispatch Email</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  readonly siteConfig = SITE_CONFIG;
  readonly copied = signal(false);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  readonly MailIcon = Mail;
  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly SendIcon = Send;
  readonly CopyIcon = Copy;
  readonly CheckIcon = Check;
  readonly DownloadIcon = Download;
  readonly MapPinIcon = MapPin;
  readonly ArrowUpRightIcon = ArrowUpRight;

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.siteConfig.email).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2500);
      });
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.formData.name || !this.formData.message) return;

    const subject = encodeURIComponent(this.formData.subject || `Inquiry from ${this.formData.name}`);
    const body = encodeURIComponent(
      `Sender Name: ${this.formData.name}\nSender Email: ${this.formData.email}\n\nMessage:\n${this.formData.message}`
    );

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${this.siteConfig.email}?subject=${subject}&body=${body}`;
    }
  }
}
