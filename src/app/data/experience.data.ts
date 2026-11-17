import { ExperienceItem } from '../core/models/experience.model';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'qiyas-aau',
    type: 'training',
    title: 'Full-Stack Developer — Mobile Path',
    role: 'Trainee Software Engineer',
    organization: 'Qiyas – Addis Ababa University',
    period: 'May 2026 – September 2026',
    location: 'Addis Ababa, Ethiopia',
    description: 'Advanced software development immersion in enterprise .NET backend engineering, Angular SPAs, and cross-platform Flutter mobile applications.',
    highlights: [
      'Built production-grade REST APIs using ASP.NET Core and Clean Architecture principles',
      'Developed responsive single-page web applications using Angular standalone components',
      'Engineered cross-platform mobile capstone projects: Training Management System, Tendering Management System, and Mini Market App'
    ],
    technologies: ['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'Flutter', 'PostgreSQL'],
    metrics: [
      { label: 'Track', value: 'Web & Mobile' },
      { label: 'Projects', value: '3 Systems' }
    ]
  },
  {
    id: 'debbal-internship',
    type: 'internship',
    title: 'Software Engineering Internship',
    role: 'Full-Stack Developer Intern',
    organization: 'Debbal Company',
    period: '2025 – 2026',
    location: 'Remote',
    description: 'Contributed to full-stack web application development using Next.js, TypeScript, Node.js, MongoDB, and shadcn/ui.',
    highlights: [
      'Built web application features with Next.js and TypeScript',
      'Developed backend functionality using Node.js and MongoDB',
      'Created responsive interfaces with shadcn/ui'
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'shadcn/ui'],
    metrics: [
      { label: 'Modality', value: 'Remote' }
    ]
  },
  {
    id: 'wsu-degree',
    type: 'education',
    title: 'BSc in Computer Science',
    role: 'High Distinction Graduate',
    organization: 'Wolaita Sodo University',
    period: 'Completed March 2026',
    location: 'Wolaita Sodo, Ethiopia',
    description: 'Four-year degree covering software engineering, data structures, algorithms, database systems, distributed architectures, and machine learning.',
    highlights: [
      'Graduated with High Distinction: Cumulative GPA of 3.81 out of 4.00',
      'Achieved 81% in the National Higher Education Exit Examination',
      'Completed academic capstone project in AI-assisted CRM systems with customer clustering'
    ],
    technologies: ['Computer Science', 'Algorithms', 'Databases', 'AI & Machine Learning'],
    metrics: [
      { label: 'CGPA', value: '3.81 / 4.00' },
      { label: 'Exit Exam', value: '81%' }
    ]
  }
];
