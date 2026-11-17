import { ServiceItem } from '../core/models/service.model';

export const SERVICES: ServiceItem[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Development',
    shortDescription: 'End-to-end web applications combining robust ASP.NET Core backends with responsive Angular single-page frontends.',
    details: [],
    deliverables: [],
    icon: 'layers',
    badge: 'Core Focus'
  },
  {
    id: 'backend-api',
    title: 'ASP.NET Core API Development',
    shortDescription: 'High-performance RESTful APIs featuring Clean Architecture, secure JWT authentication, and Entity Framework Core data access.',
    details: [],
    deliverables: [],
    icon: 'server',
    badge: 'Backend'
  },
  {
    id: 'angular-frontend',
    title: 'Angular Frontend Development',
    shortDescription: 'Fast, responsive web interfaces built with Angular standalone components, Signals, and modern Tailwind CSS systems.',
    details: [],
    deliverables: [],
    icon: 'layout',
    badge: 'Frontend'
  },
  {
    id: 'database-design',
    title: 'Database Design & Integration',
    shortDescription: 'Normalized relational database schemas, index tuning, and performant query structures using PostgreSQL and MySQL.',
    details: [],
    deliverables: [],
    icon: 'database',
    badge: 'Data'
  },
  {
    id: 'mobile-dev',
    title: 'Flutter Mobile App Development',
    shortDescription: 'Cross-platform mobile applications for Android and iOS using Flutter and Dart with reliable offline SQLite caching.',
    details: [],
    deliverables: [],
    icon: 'smartphone',
    badge: 'Mobile'
  },
  {
    id: 'ui-implementation',
    title: 'UI Implementation & Prototyping',
    shortDescription: 'Translating design concepts and wireframes into pixel-perfect, accessible, and responsive production code.',
    details: [],
    deliverables: [],
    icon: 'palette',
    badge: 'UI/UX'
  }
];
