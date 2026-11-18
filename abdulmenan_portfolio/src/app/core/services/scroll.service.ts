import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  readonly activeSection = signal<string>('home');
  readonly isScrolled = signal<boolean>(false);

  scrollTo(sectionId: string): void {
    const id = sectionId.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(id);
    }
  }

  updateScrollState(scrollTop: number): void {
    this.isScrolled.set(scrollTop > 40);

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'devspace', 'services', 'contact'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        // Section is in view if its top is near or above middle of screen and bottom is below top
        if (rect.top <= 200 && rect.bottom >= 200) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }
}
