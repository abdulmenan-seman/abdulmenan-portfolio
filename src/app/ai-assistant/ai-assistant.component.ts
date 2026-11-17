import { Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiAssistantService } from './ai-assistant.service';
import { ChatMessage } from '../core/models/chat.model';
import { ScrollService } from '../core/services/scroll.service';
import {
  LucideAngularModule,
  Bot,
  X,
  Send,
  Sparkles,
  RotateCcw,
  ArrowUpRight,
  MessageSquare
} from 'lucide-angular';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <!-- Floating Launcher Pill Button in Bottom Right -->
    <div class="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      @if (!isOpen()) {
        <button
          type="button"
          (click)="toggleOpen()"
          class="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-theme-surface hover:bg-theme-surface-hover border border-theme hover:border-[var(--accent)]/60 shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          aria-label="Open Abdu AI Portfolio Guide">

          <div class="relative w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--accent-contrast)] flex items-center justify-center font-bold shadow-xs">
            <lucide-icon [img]="BotIcon" class="w-4 h-4"></lucide-icon>
            <span class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-theme-surface"></span>
          </div>

          <div class="text-left font-mono">
            <span class="text-xs font-bold text-theme-main block group-hover:text-[var(--accent)] transition-colors">Abdu AI</span>
            <span class="text-[10px] text-theme-muted block">Portfolio Guide</span>
          </div>
        </button>
      }
    </div>

    <!-- Assistant Chat Modal Window -->
    @if (isOpen()) {
      <div
        class="fixed inset-x-3 bottom-3 sm:inset-auto sm:right-6 sm:bottom-6 sm:w-[420px] h-[520px] sm:h-[550px] max-h-[85vh] bg-theme-elevated border border-theme rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up glow-card"
        role="dialog"
        aria-label="Abdu AI Portfolio Assistant">

        <!-- Chat Header -->
        <div class="flex items-center justify-between px-4 py-3.5 bg-theme-surface border-b border-theme flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] flex items-center justify-center font-bold shadow-xs">
              <lucide-icon [img]="BotIcon" class="w-4 h-4"></lucide-icon>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="font-display font-bold text-sm text-theme-main">Abdu AI</span>
                <span class="px-1.5 py-0.2 rounded text-[9px] font-mono bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30 font-bold">LOCAL</span>
              </div>
              <p class="font-mono text-[10px] text-theme-muted">Guide to Abdulmenan's portfolio</p>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <button
              type="button"
              (click)="clearMessages()"
              class="p-1.5 rounded-lg text-theme-muted hover:text-theme-main hover:bg-theme-surface-hover transition-colors"
              title="Reset conversation"
              aria-label="Reset conversation">
              <lucide-icon [img]="RotateCcwIcon" class="w-3.5 h-3.5"></lucide-icon>
            </button>
            <button
              type="button"
              (click)="toggleOpen()"
              class="p-1.5 rounded-lg text-theme-muted hover:text-theme-main hover:bg-theme-surface-hover transition-colors"
              aria-label="Close Assistant">
              <lucide-icon [img]="XIcon" class="w-4 h-4"></lucide-icon>
            </button>
          </div>
        </div>

        <!-- Chat Messages Log -->
        <div #chatContainer class="flex-1 overflow-y-auto p-4 space-y-4 bg-theme-base/80 font-mono text-xs">

          <!-- Notice -->
          <div class="p-2.5 rounded-xl bg-theme-surface/70 border border-theme text-[10px] text-theme-subtle leading-relaxed">
            <span class="text-[var(--accent)] font-semibold">Verified Knowledge:</span> Answers are matched deterministically from Abdulmenan's real education, skills, and project history.
          </div>

          <!-- Messages -->
          @for (msg of messages(); track msg.id) {
            <div
              class="flex flex-col"
              [ngClass]="msg.sender === 'user' ? 'items-end' : 'items-start'">

              <div
                class="max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-xs"
                [ngClass]="msg.sender === 'user'
                  ? 'bg-[var(--accent)] text-[var(--accent-contrast)] font-medium rounded-tr-none'
                  : 'bg-theme-surface text-theme-main border border-theme rounded-tl-none'">
                <p class="whitespace-pre-line">{{ msg.text }}</p>

                @if (msg.links && msg.links.length > 0) {
                  <div class="mt-2 pt-2 border-t border-theme flex flex-wrap gap-1.5">
                    @for (link of msg.links; track link.label) {
                      <a
                        [href]="link.url"
                        [target]="link.isExternal ? '_blank' : '_self'"
                        [rel]="link.isExternal ? 'noopener noreferrer' : ''"
                        (click)="onLinkClick($event, link.url, link.isExternal)"
                        class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-theme-elevated text-[var(--accent)] border border-theme hover:border-[var(--accent)] transition-colors">
                        <span>{{ link.label }}</span>
                        <lucide-icon [img]="ArrowUpRightIcon" class="w-3 h-3"></lucide-icon>
                      </a>
                    }
                  </div>
                }
              </div>

              <!-- Quick replies -->
              @if (msg.sender === 'assistant' && msg.quickReplies && msg.quickReplies.length > 0) {
                <div class="flex flex-wrap gap-1.5 mt-2">
                  @for (reply of msg.quickReplies; track reply) {
                    <button
                      type="button"
                      (click)="sendUserMessage(reply)"
                      class="px-2.5 py-1 rounded-full bg-theme-surface hover:bg-theme-surface-hover border border-theme hover:border-[var(--accent)]/50 text-theme-muted hover:text-[var(--accent)] text-[10px] transition-colors shadow-2xs">
                      {{ reply }}
                    </button>
                  }
                </div>
              }

            </div>
          }

        </div>

        <!-- Chat Input -->
        <form (submit)="onFormSubmit($event)" class="p-3 bg-theme-surface border-t border-theme flex items-center gap-2 flex-shrink-0">
          <input
            type="text"
            [(ngModel)]="userInput"
            name="userInput"
            placeholder="Ask about skills, projects, contact..."
            class="flex-1 px-3 py-2 rounded-xl bg-theme-base border border-theme focus:border-[var(--accent)] text-theme-main font-mono text-xs placeholder:text-theme-subtle focus:outline-none"
            autocomplete="off"
          />
          <button
            type="submit"
            class="p-2.5 rounded-xl bg-[var(--accent)] text-[var(--accent-contrast)] transition-opacity hover:opacity-90 flex-shrink-0"
            aria-label="Send Message">
            <lucide-icon [img]="SendIcon" class="w-4 h-4"></lucide-icon>
          </button>
        </form>

      </div>
    }
  `
})
export class AiAssistantComponent {
  @ViewChild('chatContainer') private chatContainer!: ElementRef<HTMLDivElement>;

  private readonly assistantService = inject(AiAssistantService);
  private readonly scrollService = inject(ScrollService);

  readonly isOpen = signal(false);
  userInput = '';

  readonly BotIcon = Bot;
  readonly XIcon = X;
  readonly SendIcon = Send;
  readonly SparklesIcon = Sparkles;
  readonly RotateCcwIcon = RotateCcw;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly MessageSquareIcon = MessageSquare;

  readonly messages = signal<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I'm Abdu AI, your interactive guide to Abdulmenan Seman's portfolio. What would you like to know about his background, software projects, or skills?",
      timestamp: new Date(),
      quickReplies: [
        'Who is Abdulmenan?',
        'What technologies does he specialize in?',
        'Tell me about FixMyCampus',
        'How can I contact him?'
      ]
    }
  ]);

  toggleOpen(): void {
    this.isOpen.update(v => !v);
  }

  clearMessages(): void {
    this.messages.set([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: "Conversation cleared. How can I assist you with Abdulmenan's portfolio?",
        timestamp: new Date(),
        quickReplies: [
          'What technologies does he specialize in?',
          'Tell me about FixMyCampus',
          'What is his educational background?',
          'Where can I download his CV?'
        ]
      }
    ]);
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    if (!this.userInput.trim()) return;
    this.sendUserMessage(this.userInput.trim());
    this.userInput = '';
  }

  sendUserMessage(text: string): void {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date()
    };

    this.messages.update(msgs => [...msgs, userMsg]);
    this.scrollToBottom();

    setTimeout(() => {
      const match = this.assistantService.findBestMatch(text);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: match.text,
        timestamp: new Date(),
        links: match.links,
        quickReplies: match.followUps
      };

      this.messages.update(msgs => [...msgs, assistantMsg]);
      this.scrollToBottom();
    }, 180);
  }

  onLinkClick(event: Event, url: string, isExternal?: boolean): void {
    if (!isExternal && url.startsWith('#')) {
      event.preventDefault();
      this.scrollService.scrollTo(url);
      this.isOpen.set(false);
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.chatContainer) {
        const el = this.chatContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    }, 40);
  }
}
