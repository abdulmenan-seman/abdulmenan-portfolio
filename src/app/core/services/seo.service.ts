import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SITE_CONFIG } from '../config/site.config';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  initDefaultMeta(): void {
    this.titleService.setTitle(`${SITE_CONFIG.name} | ${SITE_CONFIG.role}`);
    this.metaService.updateTag({ name: 'description', content: SITE_CONFIG.bio });
    this.metaService.updateTag({ property: 'og:title', content: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}` });
    this.metaService.updateTag({ property: 'og:description', content: SITE_CONFIG.tagline });
  }

  setPageTitle(subtitle?: string): void {
    if (subtitle) {
      this.titleService.setTitle(`${subtitle} — ${SITE_CONFIG.name}`);
    } else {
      this.titleService.setTitle(`${SITE_CONFIG.name} | ${SITE_CONFIG.role}`);
    }
  }
}
