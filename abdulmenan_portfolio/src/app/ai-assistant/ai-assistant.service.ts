import { Injectable } from '@angular/core';
import { PORTFOLIO_KNOWLEDGE } from '../data/portfolio-knowledge';
import { ChatMessage, CuratedQA } from '../core/models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class AiAssistantService {
  private qaDatabase: CuratedQA[] = PORTFOLIO_KNOWLEDGE;

  findBestMatch(userInput: string): { text: string; links?: { label: string; url: string; isExternal?: boolean }[]; followUps?: string[] } {
    const query = userInput.toLowerCase().trim();

    if (!query) {
      return {
        text: "Please ask a question about Abdulmenan's skills, projects, experience, or contact information.",
        followUps: ['Who is Abdulmenan?', 'What technologies do you use?', 'Show projects']
      };
    }

    let bestScore = 0;
    let bestQA: CuratedQA | null = null;

    for (const qa of this.qaDatabase) {
      let score = 0;
      for (const keyword of qa.keywords) {
        if (query.includes(keyword)) {
          score += 2;
        }
      }

      // Check words in the question itself
      const qWords = qa.question.toLowerCase().split(/\s+/);
      for (const word of qWords) {
        if (word.length > 3 && query.includes(word)) {
          score += 1;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestQA = qa;
      }
    }

    if (bestQA && bestScore >= 2) {
      return {
        text: bestQA.answer,
        links: bestQA.links,
        followUps: bestQA.suggestedFollowUps
      };
    }

    // Default polite fallback
    return {
      text: "I am Abdu AI, a curated assistant for this portfolio. I didn't quite catch that specific inquiry, but I can share verified facts about Abdulmenan's software development experience, projects like FixMyCampus & TrustRent, his academic achievements (GPA 3.81), or how to connect with him.",
      links: [
        { label: 'Explore Selected Work', url: '#projects' },
        { label: 'View Skills & Stack', url: '#skills' },
        { label: 'Contact Abdulmenan', url: '#contact' }
      ],
      followUps: [
        'Who is Abdulmenan?',
        'Tell me about FixMyCampus',
        'What technologies does he specialize in?',
        'How can I contact him?'
      ]
    };
  }
}
