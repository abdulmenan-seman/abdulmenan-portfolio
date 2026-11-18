import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

interface PlexusParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

@Component({
  selector: 'app-ambient-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas #plexusCanvas class="absolute inset-0 w-full h-full"></canvas>

      <!-- Ambient glow orbs layered on top of plexus -->
      <div
        class="absolute -top-[10%] left-[30%] w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.10] pointer-events-none"
        style="background: radial-gradient(circle, var(--accent) 0%, transparent 70%);">
      </div>
      <div
        class="absolute top-[45%] -right-[8%] w-[400px] h-[350px] rounded-full blur-[110px] opacity-[0.06] pointer-events-none"
        style="background: radial-gradient(circle, #38BDF8 0%, transparent 70%);">
      </div>
    </div>
  `
})
export class AmbientBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('plexusCanvas') private canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly ngZone = inject(NgZone);
  private readonly themeService = inject(ThemeService);

  private ctx!: CanvasRenderingContext2D;
  private particles: PlexusParticle[] = [];
  private animFrameId = 0;
  private resizeObserver?: ResizeObserver;
  private isDestroyed = false;

  // Tuning
  private readonly PARTICLE_COUNT_FACTOR = 0.00004; // particles per square pixel
  private readonly MAX_PARTICLES = 90;
  private readonly MIN_PARTICLES = 25;
  private readonly CONNECTION_DISTANCE = 160;
  private readonly PARTICLE_SPEED = 0.25;
  private readonly PARTICLE_MIN_RADIUS = 1;
  private readonly PARTICLE_MAX_RADIUS = 2.2;
  private readonly LINE_WIDTH = 0.6;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    this.ctx = ctx;

    this.resizeCanvas(canvas);
    this.initParticles(canvas);

    // Observe resize
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas(canvas);
      this.initParticles(canvas);
    });
    this.resizeObserver.observe(canvas.parentElement || document.body);

    // Run animation outside Angular zone for performance
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
    this.resizeObserver?.disconnect();
  }

  private resizeCanvas(canvas: HTMLCanvasElement): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  private initParticles(canvas: HTMLCanvasElement): void {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const area = w * h;

    const count = Math.min(
      this.MAX_PARTICLES,
      Math.max(this.MIN_PARTICLES, Math.floor(area * this.PARTICLE_COUNT_FACTOR))
    );

    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * this.PARTICLE_SPEED * 2,
        vy: (Math.random() - 0.5) * this.PARTICLE_SPEED * 2,
        radius: this.PARTICLE_MIN_RADIUS + Math.random() * (this.PARTICLE_MAX_RADIUS - this.PARTICLE_MIN_RADIUS),
        opacity: 0.25 + Math.random() * 0.45
      });
    }
  }

  private animate = (): void => {
    if (this.isDestroyed) return;

    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    this.ctx.clearRect(0, 0, w, h);

    const isDark = this.themeService.isDark();

    // Accent color for dots/lines — adapts to theme
    const dotR = isDark ? 196 : 101;
    const dotG = isDark ? 241 : 163;
    const dotB = isDark ? 53 : 13;

    // Secondary color (cyan) for some connections
    const cyanR = isDark ? 56 : 14;
    const cyanG = isDark ? 189 : 165;
    const cyanB = isDark ? 248 : 233;

    const particles = this.particles;

    // Update positions
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = w + 10;
      else if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      else if (p.y > h + 10) p.y = -10;
    }

    // Draw connections
    const connDist = this.CONNECTION_DISTANCE;
    const connDistSq = connDist * connDist;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distSq = dx * dx + dy * dy;

        if (distSq < connDistSq) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / connDist) * 0.22;

          // Alternate between accent and cyan lines
          const useCyan = (i + j) % 5 === 0;
          const r = useCyan ? cyanR : dotR;
          const g = useCyan ? cyanG : dotG;
          const b = useCyan ? cyanB : dotB;

          this.ctx.beginPath();
          this.ctx.moveTo(particles[i].x, particles[i].y);
          this.ctx.lineTo(particles[j].x, particles[j].y);
          this.ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          this.ctx.lineWidth = this.LINE_WIDTH;
          this.ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${dotR},${dotG},${dotB},${p.opacity * 0.6})`;
      this.ctx.fill();
    }

    this.animFrameId = requestAnimationFrame(this.animate);
  };
}
