import type { ComponentType, SVGProps } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Cog,
  Layers,
  Server,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Boxes,
  MessageSquare,
} from 'lucide-react';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const profile = {
  name: 'Aman Patel',
  firstName: 'Aman',
  role: 'Software Engineer',
  headline: 'Backend engineer crafting resilient, high-performance systems.',
  positioning:
    'I design and build distributed backend systems with Java, Spring Boot, and modern cloud infrastructure — turning complex, high-concurrency problems into products that stay fast, reliable, and observable in production.',
  location: 'Guwahati, India',
  availability: 'Open to backend & platform roles',
  email: 'aman17626@gmail.com',
  phone: '+91 7002235778',
  resumeUrl: '/resume/Aman-Patel-Resume.pdf',
  socials: {
    github: 'https://github.com/amannpatel',
    linkedin: 'https://linkedin.com/in/amanpatell',
  },
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  eyebrow: 'About',
  title: 'Backend-first, product-minded.',
  paragraphs: [
    'I’m Aman — a software engineer who feels most at home in the layers most users never see. I build APIs, data models, and background workflows that quietly hold a product together, and I obsess over the details that make them fast, safe, and easy to reason about.',
    'My day-to-day sits in Java and Spring Boot, wired into SQL, Redis, and Kafka, with a healthy respect for observability, indexes, and query plans. I care about clean domain boundaries, thoughtful error handling, and code that a future teammate can read on their first day.',
    'Outside of shipping features, I mentor developers at XT Academy on problem solving and system design, and I use side projects like a distributed ticketing platform to keep sharpening the fundamentals.',
  ],
  focus: [
    'Distributed backend systems',
    'API design & performance tuning',
    'Data modelling & indexing',
    'Reliability & security remediation',
  ],
  stats: [
    { value: '1.5+', label: 'Years shipping production backends' },
    { value: '10+', label: 'Dashboards & modules delivered' },
    { value: '2', label: 'Enterprise clients supported' },
    { value: '4+', label: 'Certifications & recognitions' },
  ],
};

export type SkillGroup = {
  title: string;
  icon: IconType;
  accent: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: Code2,
    accent: 'from-violet-500/30 to-fuchsia-500/10',
    items: ['Java', 'SQL', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    accent: 'from-indigo-500/30 to-cyan-500/10',
    items: [
      'Spring Boot',
      'Spring',
      'Hibernate / JPA',
      'REST APIs',
      'Microservices',
      'Spring Security',
    ],
  },
  {
    title: 'Data & Messaging',
    icon: Database,
    accent: 'from-cyan-500/30 to-emerald-500/10',
    items: [
      'MySQL',
      'PostgreSQL',
      'Redis',
      'Kafka',
      'SQL Query Optimization',
      'Database Indexing',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    accent: 'from-amber-500/30 to-rose-500/10',
    items: ['AWS EC2', 'AWS S3', 'Docker', 'Kubernetes', 'Shell Scripting'],
  },
  {
    title: 'Engineering craft',
    icon: Cog,
    accent: 'from-rose-500/30 to-violet-500/10',
    items: [
      'System Design',
      'Distributed Systems',
      'Multithreading',
      'Design Patterns',
      'OOP',
      'Performance Optimization',
      'Debugging',
      'Agile / Scrum',
      'Git',
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  client?: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Xopuntech India Pvt. Ltd.',
    role: 'Software Engineer',
    duration: 'Jun 2024 — Present',
    location: 'Guwahati, India',
    client: 'Nextiva · TataPlay',
    summary:
      'Backend engineer on enterprise dashboards and platform modules, shipping features end-to-end from database up to React UI, with a strong focus on performance, security remediation, and production reliability.',
    responsibilities: [
      'Built and maintained backend features in Java, Spring Boot, and SQL, aligned with established architectural and delivery standards.',
      'Led remediation of security vulnerabilities across multiple modules, improving application security, reliability, and code quality.',
      'Designed and delivered multiple dashboards end-to-end — backend APIs, business logic, database access, and React-based interfaces.',
      'Improved application performance by profiling slow database operations, tuning SQL queries, adding targeted indexes, and removing unnecessary joins.',
      'Reduced API latency through backend optimization, efficient data access patterns, query tuning, and pagination.',
      'Investigated and resolved production issues via debugging, root-cause analysis, and cross-team collaboration with QA and DevOps.',
      'Participated in code reviews and supported release cycles alongside DevOps and QA to keep deployments smooth.',
      'Worked with AWS (EC2, S3), Docker, and shell scripting as part of everyday development and deployment workflows.',
    ],
    tech: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'SQL',
      'React',
      'AWS EC2',
      'AWS S3',
      'Docker',
      'Shell',
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  contributions: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  accent: 'violet' | 'cyan' | 'amber';
};

export const projects: Project[] = [
  {
    title: 'Scalable Real-Time Ticketing Platform',
    tagline: 'BookMyShow-style distributed booking system',
    description:
      'A distributed ticket booking platform engineered for high-concurrency traffic, with microservices choreographing seat locks, payments, and async notifications behind consistent APIs.',
    contributions: [
      'Designed a microservices topology with clear domain boundaries and independent deployability.',
      'Implemented distributed seat locking with Redis to keep overselling impossible under contention.',
      'Wired Kafka-based asynchronous messaging for booking events, retries, and background workflows.',
      'Introduced idempotent workflows and pagination-friendly reads to make retries safe and predictable.',
      'Containerized services with Docker and orchestrated them on Kubernetes for scalable delivery.',
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes'],
    accent: 'violet',
  },
  {
    title: 'StrideCal',
    tagline: 'Microservices EdTech platform',
    description:
      'Feature development on a microservices-based EdTech product, focused on secure APIs for course subscriptions, enrollments, and user management with dependable end-to-end workflows.',
    contributions: [
      'Built secure REST APIs for course subscriptions, enrollment, and user management flows.',
      'Implemented authentication and authorization with Spring Security and OAuth2.',
      'Added request validation, structured exception handling, and consistent API contracts.',
      'Integrated services with SQL databases and coordinated with the React frontend for reliable UX.',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth2', 'React', 'SQL'],
    accent: 'cyan',
  },
];

export const education = {
  institution: 'Cotton University',
  degree: 'Master of Computer Applications (MCA)',
  duration: 'Aug 2022 — Jun 2024',
  score: 'CGPA 7.20 / 10',
  coursework: [
    'Object Oriented Programming',
    'Databases',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Machine Learning',
  ],
};

export type Highlight = {
  title: string;
  description: string;
  icon: IconType;
  tag: string;
};

export const highlights: Highlight[] = [
  {
    title: 'Mentor at XT Academy',
    description:
      'Mentoring students and working professionals in problem solving, coding, and system design fundamentals.',
    icon: MessageSquare,
    tag: 'Mentorship',
  },
  {
    title: 'Geek-O-Lympics 2.0 Finalist',
    description:
      'Advanced to the final round of GeeksforGeeks’ Geek-O-Lympics 2.0 competitive programming contest.',
    icon: Sparkles,
    tag: 'Recognition',
  },
  {
    title: 'System Design of Notification Services',
    description:
      'Scaler certification on designing scalable, fault-tolerant notification systems for modern products.',
    icon: Layers,
    tag: 'Scaler',
  },
  {
    title: 'Python for Data Science and AI',
    description:
      'IBM certification covering Python for data analysis, ML foundations, and applied problem solving.',
    icon: Boxes,
    tag: 'IBM',
  },
  {
    title: 'Security remediation lead',
    description:
      'Led vulnerability remediation across multiple production modules — from triage to shipping fixes.',
    icon: ShieldCheck,
    tag: 'Impact',
  },
  {
    title: 'Version-controlled everything',
    description:
      'Daily Git workflows across feature branches, code reviews, and release coordination with QA and DevOps.',
    icon: GitBranch,
    tag: 'Craft',
  },
];

export const contact = {
  eyebrow: 'Contact',
  title: 'Let’s build something worth shipping.',
  subtitle:
    'I’m open to backend and platform roles, interesting collaborations, and thoughtful conversations about systems, performance, and product engineering.',
  actions: [
    { label: 'aman17626@gmail.com', href: 'mailto:aman17626@gmail.com', kind: 'email' as const },
    { label: 'LinkedIn', href: profile.socials.linkedin, kind: 'linkedin' as const },
    { label: 'GitHub', href: profile.socials.github, kind: 'github' as const },
  ],
};
