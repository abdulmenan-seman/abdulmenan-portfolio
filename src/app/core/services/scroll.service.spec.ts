import { TestBed } from '@angular/core/testing';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollService]
    });
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default activeSection as home', () => {
    expect(service.activeSection()).toBe('home');
  });

  it('should update isScrolled when scrollTop is greater than 40', () => {
    service.updateScrollState(100);
    expect(service.isScrolled()).toBe(true);

    service.updateScrollState(10);
    expect(service.isScrolled()).toBe(false);
  });
});
