import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'fixmycampus',
    title: 'FixMyCampus',
    category: 'Campus Maintenance Platform',
    summary: 'A campus maintenance management platform that enables students and staff to report infrastructure issues and coordinates technician workflows with live status audits.',
    description: 'FixMyCampus streamlines university facility issue reporting. It replaces manual paper logs with a cross-platform mobile issue reporter and a centralized ASP.NET Core management API, automating ticket routing and technician dispatch.',
    problem: 'Campus infrastructure breakdowns were tracked through slow manual logs, causing long repair delays, lost reports, and zero transparency for students.',
    solution: 'Built a cross-platform mobile reporting client connected to an ASP.NET Core Web API with PostgreSQL, featuring photo evidence attachments, room location tagging, and technician dispatch boards.',
    technologies: ['Flutter', 'ASP.NET Core', 'PostgreSQL', 'C#'],
    coverImage: '/images/projects/fixmycampus/cover.webp',
    accentColor: '#38BDF8', // Cyan
    features: [
      'Role-based portals for Students, Staff, Technicians, and Campus Admins',
      'Instant ticket reporting with photo upload and hall/room location tagging',
      'Technician assignment dashboard with live status updates (Pending, In Progress, Resolved)',
      'Resolution verification with student feedback and audit trails'
    ],
    architecture: [
      'Clean Architecture separating Domain, Application, Infrastructure, and API layers',
      'ASP.NET Core Web API with Entity Framework Core migrations on PostgreSQL',
      'JWT token authentication with role-based claim policies',
      'Flutter mobile client with offline report drafting and auto-sync'
    ],
    challenges: [
      'Unreliable campus Wi-Fi: Implemented local SQLite caching in Flutter so reports can be drafted offline and synced automatically once connection is restored.',
      'Role security: Created strict policy-based authorization ensuring technicians only access assigned work orders.'
    ],
    myRole: 'Full-Stack Developer: Designed the ASP.NET Core REST API, PostgreSQL database schema, JWT authentication pipeline, and collaborated on Flutter interfaces.',
    githubUrl: 'https://github.com/abdulmenan-seman/FixMyCampus',
    status: 'completed',
    featured: true
  },
  {
    slug: 'trustrent',
    title: 'TrustRent',
    category: 'Property Rental & Verification',
    summary: 'A property rental platform designed to eliminate rental fraud and improve market transparency through landlord credentials and property deed verification.',
    description: 'TrustRent addresses rental scams by establishing a verified rental marketplace. Landlords pass an official credential verification pipeline, allowing prospective tenants to browse validated listings and inquire with confidence.',
    problem: 'Renters frequently encounter fraudulent listings, unauthorized broker markups, and nonexistent properties, leading to financial losses and mistrust.',
    solution: 'Developed a full-stack platform featuring landlord identity verification, property deed validation, parametric search filters, and direct tenant-landlord communication.',
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'PostgreSQL'],
    coverImage: '/images/projects/trustrent/cover.webp',
    accentColor: '#C4F135', // Brand Lime
    features: [
      'Two-tier landlord KYC document submission and property deed verification',
      'Dynamic property exploration with instant filters (location, price, amenities)',
      'Direct landlord inquiry messaging system with application tracking',
      'Verified listing badges ensuring authenticated ownership'
    ],
    architecture: [
      'Angular standalone components with reactive forms and Signals for instant search',
      'ASP.NET Core REST API following Clean Architecture and CQRS patterns',
      'PostgreSQL database with optimized spatial queries and pagination indices'
    ],
    challenges: [
      'Sub-50ms listing search: Designed dynamic query expressions and composite indices in PostgreSQL to filter across multiple rental parameters efficiently.',
      'Adaptive layouts: Crafted a fluid responsive interface that transitions smoothly from compact mobile cards to wide desktop grids.'
    ],
    myRole: 'Lead Full-Stack Architect: Architected the complete web solution, built the responsive Angular frontend, and implemented the ASP.NET Core backend.',
    githubUrl: 'https://github.com/abdulmenan-seman/TrustRent',
    status: 'completed',
    featured: true
  },
  {
    slug: 'ai-crm',
    title: 'AI-Based CRM',
    category: 'Customer Intelligence',
    summary: 'An AI-assisted customer relationship management system designed for supermarkets to analyze buying patterns, segment customer tiers, and predict churn risk.',
    description: 'Built for Mamina Supermarket, this system combines everyday transactional CRM workflows with machine learning models that process purchase histories using RFM customer segmentation and churn prediction.',
    problem: 'Supermarket managers lacked tools to extract actionable business insights from POS sales logs, allowing high-value customers to churn undetected.',
    solution: 'Engineered a dual architecture: a PHP/MySQL management portal integrated with an asynchronous Python/FastAPI microservice running Scikit-learn RFM clustering and association rule mining.',
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'MySQL', 'PHP'],
    coverImage: '/images/projects/ai-crm/cover.webp',
    accentColor: '#A78BFA', // Purple
    features: [
      'Automated RFM (Recency, Frequency, Monetary) customer segmentation into loyalty tiers',
      'Predictive customer churn detection identifying declining purchase activity',
      'Market basket association rules identifying complementary product pairings',
      'Interactive visual dashboard showing retention metrics and lifetime value'
    ],
    architecture: [
      'Microservice model decoupling transactional CRM operations from analytical ML workloads',
      'FastAPI asynchronous endpoints delivering low-latency inference results',
      'Pandas data pipelines preprocessing raw supermarket POS receipt records'
    ],
    challenges: [
      'Noisy transaction data: Built data cleansing pipelines to filter duplicate SKUs and seasonal anomalies from raw supermarket receipt databases.',
      'Service communication: Configured secure JSON API bridges connecting the PHP CRM interface with the FastAPI machine learning service.'
    ],
    myRole: 'AI & Backend Developer: Developed the Python/FastAPI analytics service, trained the clustering models, and integrated API endpoints with the PHP portal.',
    githubUrl: 'https://github.com/abdulmenan-seman/AI-Based-CRM',
    status: 'completed',
    featured: true
  },
  {
    slug: 'mini-market-app',
    title: 'Mini Market App',
    category: 'Mobile Commerce',
    summary: 'A Flutter mobile shopping application featuring categorized product discovery, real-time keyword search, and offline-persistent shopping cart management.',
    description: 'A responsive mobile commerce client developed during the Advanced Digital Skills Training at Qiyas – AAU. It demonstrates efficient state management, local SQLite caching, and fluid animations.',
    problem: 'Small retail shops and neighborhood shoppers need a fast, simple mobile ordering tool without heavy enterprise complexity.',
    solution: 'Created an intuitive mobile catalog with category browsing, debounced search, persistent shopping cart, and instant order summary generation.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    coverImage: '/images/projects/mini-market/cover.webp',
    accentColor: '#F59E0B', // Amber
    features: [
      'Categorized product catalog with category filter chips',
      'Real-time search debouncing for fast catalog lookups',
      'Persistent shopping cart retained across app restarts with SQLite',
      'Order invoice preview with dynamic tax and total calculations'
    ],
    architecture: [
      'Layered Flutter structure: UI presentation, Provider state, and SQLite data access',
      'Local database caching guaranteeing offline cart retention'
    ],
    challenges: [
      'State synchronization: Managed reactive state between product catalog views and cart badge counts without triggering redundant widget rebuilds.',
      'Smooth performance: Optimized widget rendering for smooth 60fps scrolling on budget mobile hardware.'
    ],
    myRole: 'Mobile Developer: Designed the user interface, implemented Provider state management, and built the local SQLite storage layer.',
    githubUrl: 'https://github.com/abdulmenan-seman/Mini-Market-App',
    status: 'completed',
    featured: false
  }
];
