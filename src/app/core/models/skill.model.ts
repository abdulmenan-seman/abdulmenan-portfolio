export interface SkillItem {
  name: string;
  levelDescription?: string; // e.g. "Core Expertise", "Proficient", "Familiar"
  isPrimary?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  accent: string;
  skills: SkillItem[];
}
