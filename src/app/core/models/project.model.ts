export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  coverImage: string;
  logoIcon?: string;
  accentColor: string;
  features: string[];
  architecture: string[];
  challenges: string[];
  myRole: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'prototype';
  featured: boolean;
}
