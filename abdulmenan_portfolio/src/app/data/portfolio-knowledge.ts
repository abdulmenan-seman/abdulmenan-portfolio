import { CuratedQA } from '../core/models/chat.model';

export const PORTFOLIO_KNOWLEDGE: CuratedQA[] = [
  {
    keywords: ['who', 'abdulmenan', 'about', 'background', 'bio', 'introduce', 'developer'],
    question: 'Who is Abdulmenan Seman?',
    answer: 'Abdulmenan Seman is a Computer Science graduate and Full-Stack Software Developer based in Addis Ababa, Ethiopia. He builds scalable web applications and practical digital solutions using C#, ASP.NET Core, Node.js, Express.js, React, Angular, TypeScript, PostgreSQL, and MongoDB.',
    links: [
      { label: 'View About Section', url: '#about' },
      { label: 'Explore Selected Projects', url: '#projects' }
    ],
    suggestedFollowUps: ['What technologies do you use?', 'Tell me about FixMyCampus', 'How can I contact Abdulmenan?']
  },
  {
    keywords: ['skills', 'technologies', 'stack', 'tech', 'languages', 'tools', 'c#', 'dotnet', 'angular', 'react', 'express', 'node.js', 'mongodb'],
    question: 'What technologies does Abdulmenan specialize in?',
    answer: 'Abdulmenan works across the full software development lifecycle:\n• Backend: C#, ASP.NET Core, Node.js, Express.js, Entity Framework Core, RESTful APIs, Clean Architecture, JWT Authentication.\n• Frontend: React, Angular (standalone components, Signals), TypeScript, Tailwind CSS, HTML5/CSS3.\n• Databases: PostgreSQL, MongoDB, MySQL, SQL Server.\n• Mobile: Flutter, Dart, SQLite.\n• AI & Tools: Python, FastAPI, Scikit-learn, Git, GitHub, Docker.',
    links: [
      { label: 'Inspect Full Toolkit', url: '#skills' }
    ],
    suggestedFollowUps: ['Tell me about TrustRent', 'Does he build mobile apps?', 'Download CV']
  },
  {
    keywords: ['fixmycampus', 'campus', 'maintenance', 'flutter', 'issue reporting'],
    question: 'Tell me about the FixMyCampus project.',
    answer: 'FixMyCampus is an enterprise campus facility maintenance platform. It enables students and staff to report infrastructure defects (electrical, plumbing, physical repairs) with photo uploads and precise hall/room tagging, while administrators dispatch work orders to technicians with live status audits. It is built with Flutter, ASP.NET Core Web API, and PostgreSQL.',
    links: [
      { label: 'View FixMyCampus Details', url: '#projects' },
      { label: 'GitHub Repository', url: 'https://github.com/abdulmenan-seman/FixMyCampus', isExternal: true }
    ],
    suggestedFollowUps: ['Tell me about TrustRent', 'Show all projects']
  },
  {
    keywords: ['trustrent', 'rental', 'property', 'landlord', 'verification'],
    question: 'What is TrustRent?',
    answer: 'TrustRent is a property rental platform designed to eliminate rental scams through landlord identity and property deed verification. Prospective tenants browse verified listings with parametric filters (price, location, amenities) and communicate directly with authenticated property owners. Built using Angular, ASP.NET Core, and PostgreSQL.',
    links: [
      { label: 'View TrustRent Details', url: '#projects' },
      { label: 'GitHub Repository', url: 'https://github.com/abdulmenan-seman/TrustRent', isExternal: true }
    ],
    suggestedFollowUps: ['Tell me about AI-Based CRM', 'Who is Abdulmenan?']
  },
  {
    keywords: ['crm', 'ai', 'mamina', 'supermarket', 'fastapi', 'python', 'rfm'],
    question: 'Tell me about the AI-Based CRM project.',
    answer: 'The AI-Based CRM was developed for Mamina Supermarket to transform raw POS receipts into actionable customer intelligence. It uses Python and FastAPI with Scikit-learn to run RFM (Recency, Frequency, Monetary) clustering and churn prediction, seamlessly bridging inference results to a management portal built with PHP and MySQL.',
    links: [
      { label: 'View AI CRM Details', url: '#projects' },
      { label: 'GitHub Repository', url: 'https://github.com/abdulmenan-seman/AI-Based-CRM', isExternal: true }
    ],
    suggestedFollowUps: ['What technologies do you use?', 'Show all projects']
  },
  {
    keywords: ['education', 'degree', 'university', 'gpa', 'wolaita', 'exit exam', 'graduation', 'academic'],
    question: 'What is Abdulmenan’s educational background?',
    answer: 'Abdulmenan graduated with a Bachelor of Science (BSc) in Computer Science from Wolaita Sodo University in March 2026. He achieved an outstanding Cumulative GPA of 3.81 out of 4.00 (High Distinction) and scored 81% on the National Higher Education Exit Examination. He also completed the Advanced Digital Skills Training Program at Qiyas – Addis Ababa University.',
    links: [
      { label: 'View Education & Journey', url: '#experience' }
    ],
    suggestedFollowUps: ['Tell me about Qiyas training', 'What are his primary skills?']
  },
  {
    keywords: ['training', 'qiyas', 'addis ababa university', 'aau', 'mobile path'],
    question: 'What was the Qiyas – Addis Ababa University training program?',
    answer: 'Abdulmenan completed the Advanced Digital Skills Training Program at Qiyas – Addis Ababa University (May 2026 – September 2026) in the Full-Stack Software Developer (Mobile Development Path). The curriculum covered enterprise C#, .NET Core, Angular, TypeScript, and Flutter, with major capstone builds including a Training Management System, Tendering System, and Mini Market App.',
    links: [
      { label: 'View Experience Timeline', url: '#experience' }
    ],
    suggestedFollowUps: ['Does he build mobile apps?', 'Tell me about FixMyCampus']
  },
  {
    keywords: ['internship', 'debbal', 'experience', 'work', 'job'],
    question: 'Does Abdulmenan have professional internship experience?',
    answer: 'Yes! Abdulmenan worked as a remote Full-Stack Developer Intern at Debbal Company (2025–2026), using Next.js, TypeScript, Node.js, MongoDB, and shadcn/ui.',
    links: [
      { label: 'View Experience Section', url: '#experience' }
    ],
    suggestedFollowUps: ['What services does he offer?', 'How can I contact him?']
  },
  {
    keywords: ['mobile', 'flutter', 'dart', 'ios', 'android', 'app'],
    question: 'Does Abdulmenan build mobile applications?',
    answer: 'Yes! Abdulmenan builds high-performance cross-platform mobile applications using Flutter and Dart. Projects include FixMyCampus (campus issue reporting) and Mini Market App (mobile catalog and offline cart shopping). He specializes in reactive state management, offline SQLite caching, and REST API integration.',
    links: [
      { label: 'Explore Mobile Projects', url: '#projects' }
    ],
    suggestedFollowUps: ['Tell me about FixMyCampus', 'What services do you offer?']
  },
  {
    keywords: ['services', 'hire', 'freelance', 'capabilities', 'what can you do', 'offer'],
    question: 'What services does Abdulmenan offer?',
    answer: 'Abdulmenan provides professional development services including:\n1. Full-Stack Web Development (ASP.NET Core + Angular)\n2. ASP.NET Core REST API Architecture & Security\n3. Angular Frontend Development & SPAs\n4. Responsive Website Development\n5. Database Design & SQL Optimization (PostgreSQL / MySQL)\n6. Flutter Cross-Platform Mobile Applications\n7. Clean UI Implementation & Prototyping',
    links: [
      { label: 'Explore Services Section', url: '#services' },
      { label: 'Initiate Contact', url: '#contact' }
    ],
    suggestedFollowUps: ['How can I contact him?', 'Download CV']
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'message', 'collaborate', 'linkedin', 'github'],
    question: 'How can I contact Abdulmenan?',
    answer: 'You can connect with Abdulmenan directly through:\n• Email: abdulmenanseman0@gmail.com\n• LinkedIn: linkedin.com/in/abdulmenan-seman8433a\n• GitHub: github.com/abdulmenan-seman\n• Or use the interactive message form on this portfolio!',
    links: [
      { label: 'Go to Contact Form', url: '#contact' },
      { label: 'Send Email Directly', url: 'mailto:abdulmenanseman0@gmail.com', isExternal: true },
      { label: 'Open LinkedIn Profile', url: 'https://www.linkedin.com/in/abdulmenan-seman8433a', isExternal: true }
    ],
    suggestedFollowUps: ['Download CV', 'Who is Abdulmenan?']
  },
  {
    keywords: ['resume', 'cv', 'download', 'pdf', 'credentials'],
    question: 'Where can I download Abdulmenan’s CV?',
    answer: 'Abdulmenan’s verified CV details are available on this portfolio! You can review his credentials, education (WSU BSc CS, GPA 3.81), training (Qiyas AAU), and project history directly or reach out via email to receive the latest PDF copy.',
    links: [
      { label: 'Review Credentials & Journey', url: '#experience' },
      { label: 'Request CV via Contact', url: '#contact' }
    ],
    suggestedFollowUps: ['How can I contact him?', 'What technologies does he use?']
  }
];

export const DEVSPACE_COMMANDS: Record<string, string> = {
  help: `Available DevSpace commands:
  • about       - Professional overview & engineering identity
  • skills      - Technology stack & core proficiencies
  • projects    - Selected real-world software systems
  • experience  - Career timeline, internship & training
  • education   - University degree, GPA (3.81) & exit exam (81%)
  • services    - Development services & capabilities
  • contact     - Communication channels & professional links
  • status      - System telemetry, architecture & availability
  • clear       - Clear terminal output`,

  about: `Abdulmenan Seman is a Computer Science graduate and Full-Stack Software Developer passionate about building scalable, reliable, and meaningful digital products.
Specializing in C#, ASP.NET Core, Node.js, Express.js, React, Angular, TypeScript, PostgreSQL, and MongoDB.`,

  skills: `Core Technologies:
  • Backend   : C#, ASP.NET Core, Node.js, Express.js, Entity Framework Core, REST APIs, Clean Architecture, JWT
  • Frontend  : React, Angular (Standalone, Signals), TypeScript, Tailwind CSS, HTML5, CSS3
  • Databases : PostgreSQL, MongoDB, MySQL, SQL Server
  • Mobile    : Flutter, Dart, Provider, SQLite
  • AI/Tools  : Python, FastAPI, Scikit-learn, Git, GitHub, Docker`,

  projects: `Selected Featured Projects:
  1. FixMyCampus  [Flutter + ASP.NET Core + PostgreSQL] - Campus facility issue reporting platform
  2. TrustRent    [Angular + ASP.NET Core + PostgreSQL] - Verified property rental marketplace
  3. AI-Based CRM [Python FastAPI + PHP + MySQL]        - Supermarket customer RFM intelligence
  4. Mini Market  [Flutter + Dart + SQLite]             - Cross-platform retail commerce app`,

  experience: `Professional Experience & Training:
  • Qiyas – Addis Ababa University (May 2026 - Sep 2026)
    Full-Stack Software Developer (Mobile Track) - .NET Core, Angular, Flutter
  • Debbal Company (2025 - 2026)
    Remote Software Engineering Intern - Next.js, TypeScript, Node.js, MongoDB & shadcn/ui`,

  education: `Academic Credentials:
  • Wolaita Sodo University: BSc in Computer Science (Graduated March 2026)
  • Cumulative GPA: 3.81 / 4.00 (High Distinction)
  • National Exit Examination Result: 81%
  • Advanced Training: Qiyas - Addis Ababa University`,

  services: `Development Services:
  • Full-Stack Web Application Development (ASP.NET Core + Angular)
  • RESTful API Architecture & Secure Microservices
  • Single Page Application (SPA) Engineering with Angular & Tailwind CSS
  • Relational Database Design & Query Optimization (PostgreSQL / MySQL)
  • Cross-Platform Mobile Applications (Flutter & Dart)`,

  contact: `Direct Communication Channels:
  • Email    : abdulmenanseman0@gmail.com
  • LinkedIn : linkedin.com/in/abdulmenan-seman8433a
  • GitHub   : github.com/abdulmenan-seman
  • Location : Addis Ababa, Ethiopia`,

  status: `System Telemetry:
  • Status        : ONLINE (Available for Full-Stack Software Developer roles)
  • Runtime       : Angular 21 (Standalone) + Tailwind CSS v4 + TypeScript 5.9
  • Architecture  : Component-Driven Reactive Architecture
  • Region        : Addis Ababa, Ethiopia / Global Remote
  • Response Time : < 15ms (Deterministic Local Engine)`
};
