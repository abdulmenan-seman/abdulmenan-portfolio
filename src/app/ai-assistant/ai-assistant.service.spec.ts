import { TestBed } from '@angular/core/testing';
import { AiAssistantService } from './ai-assistant.service';

describe('AiAssistantService', () => {
  let service: AiAssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AiAssistantService]
    });
    service = TestBed.inject(AiAssistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return matching answer for "who is Abdulmenan"', () => {
    const res = service.findBestMatch('Who is Abdulmenan?');
    expect(res.text).toContain('Abdulmenan Seman');
    expect(res.links).toBeDefined();
    expect(res.links!.length).toBeGreaterThan(0);
  });

  it('should return matching answer for "skills"', () => {
    const res = service.findBestMatch('What are his skills and technologies?');
    expect(res.text).toContain('C#');
    expect(res.text).toContain('ASP.NET Core');
  });

  it('should return matching answer for "FixMyCampus"', () => {
    const res = service.findBestMatch('Tell me about FixMyCampus');
    expect(res.text).toContain('FixMyCampus');
    expect(res.text).toContain('Flutter');
  });

  it('should return default polite answer for unfamiliar question', () => {
    const res = service.findBestMatch('what is the weather on mars right now?');
    expect(res.text).toContain('Abdu AI');
    expect(res.followUps).toBeDefined();
  });
});
