export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: Date;
  quickReplies?: string[];
  links?: { label: string; url: string; isExternal?: boolean }[];
}

export interface CuratedQA {
  keywords: string[];
  question: string;
  answer: string;
  links?: { label: string; url: string; isExternal?: boolean }[];
  suggestedFollowUps?: string[];
}
