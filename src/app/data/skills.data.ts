import { SkillCategory } from '../core/models/skill.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'APIs, business logic & Clean Architecture',
    iconName: 'server',
    accent: '#C4F135',
    skills: [
      { name: 'C#', isPrimary: true },
      { name: 'ASP.NET Core', isPrimary: true },
      { name: 'Entity Framework Core', isPrimary: true },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs', isPrimary: true },
      { name: 'Clean Architecture', isPrimary: true },
      { name: 'JWT Authentication' },
      { name: 'LINQ' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive single-page web applications',
    iconName: 'layout',
    accent: '#38BDF8',
    skills: [
      { name: 'Angular', isPrimary: true },
      { name: 'React' },
      { name: 'TypeScript', isPrimary: true },
      { name: 'JavaScript (ESNext)', isPrimary: true },
      { name: 'Tailwind CSS', isPrimary: true },
      { name: 'HTML5 & CSS3' },
      { name: 'Angular Signals' }
    ]
  },
  {
    id: 'database',
    title: 'Database & Storage',
    subtitle: 'Relational data modeling & schema design',
    iconName: 'database',
    accent: '#A78BFA',
    skills: [
      { name: 'PostgreSQL', isPrimary: true },
      { name: 'MySQL', isPrimary: true },
      { name: 'SQL', isPrimary: true },
      { name: 'MongoDB' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    subtitle: 'Cross-platform native mobile applications',
    iconName: 'smartphone',
    accent: '#F59E0B',
    skills: [
      { name: 'Flutter', isPrimary: true },
      { name: 'Dart', isPrimary: true },
      { name: 'Provider State Management' },
      { name: 'SQLite Caching' }
    ]
  },
  {
    id: 'ai-data',
    title: 'AI & Data',
    subtitle: 'Machine learning pipelines & data processing',
    iconName: 'cpu',
    accent: '#EC4899',
    skills: [
      { name: 'Python', isPrimary: true },
      { name: 'FastAPI', isPrimary: true },
      { name: 'Scikit-learn' },
      { name: 'TensorFlow & Keras' }
    ]
  },
  {
    id: 'tools-design',
    title: 'Tools & Design',
    subtitle: 'Version control, containers & visual assets',
    iconName: 'palette',
    accent: '#10B981',
    skills: [
      { name: 'Git & GitHub', isPrimary: true },
      { name: 'Docker' },
      { name: 'Postman' },
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Illustrator' }
    ]
  }
];
