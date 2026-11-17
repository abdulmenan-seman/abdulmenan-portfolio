export interface ExperienceItem {
  id: string;
  type: 'education' | 'training' | 'internship' | 'work';
  title: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  metrics?: { label: string; value: string }[];
  isCurrent?: boolean;
}
