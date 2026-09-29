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
  Target,
  Film,
  Instagram,
  Rocket,
  LineChart,
} from 'lucide-react';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export const profile = {
  name: 'Aman Patel',
  firstName: 'Aman',
  role: 'Software Engineer · Content Creator · Digital Marketer',
  roles: ['Software Engineer', 'Content Creator', 'Digital Marketer'],
  headline: 'Engineer by day, creator by night, marketer in between.',
  positioning:
    'I build distributed backend systems for a living — and outside of the IDE, I create content, grow personal brands, and run paid ad campaigns. Same brain, three modes: shipping systems, telling stories, and turning attention into outcomes.',
  location: 'Guwahati, India',
  availability: 'Open to work, collabs & creator briefs',
  email: 'aman17626@gmail.com',
  phone: '+91 7002235778',
  resumeUrl: '/resume/Aman-Patel-Resume.pdf',
  socials: {
    github: 'https://github.com/amannpatel',
    linkedin: 'https://linkedin.com/in/amanpatell',
    instagram: 'https://www.instagram.com/amann.kabir',
  },
  instagramHandle: '@amann.kabir',
};

export const photos = {
  hero: '/pp/2.png',
  aboutPrimary: '/pp/3.png',
  aboutSecondary: '/pp/4.png',
  instagramBanner: '/pp/5.png',
  highlight: '/pp/1.jpg',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'What I do', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Creator', href: '#creator' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  eyebrow: 'About',
  title: 'Backend by trade, brand by instinct.',
  paragraphs: [
    'I’m Aman — a software engineer by profession and a creator by obsession. By day I build distributed backend systems in Java and Spring Boot. By night I make content about engineering, personal brand, and building an online presence — and I run paid ad campaigns for creators and small businesses in the process.',
    'The through-line is the same: I like systems. Systems for scaling APIs, systems for growing an audience, systems for turning attention into outcomes. Whether it’s an SQL query plan or a hook on a reel, the discipline of thinking in leverage never changes.',
    'Outside of shipping features and posting online, I mentor at XT Academy and use side projects like a distributed ticketing platform to keep the fundamentals sharp.',
  ],
  focus: [
    'Distributed backend systems',
    'Short-form content & personal brand',
    'Meta ads & performance marketing',
    'Mentorship & system design',
  ],
  stats: [
    { value: '3', label: 'Modes I operate in — engineer, creator, marketer' },
    { value: '1.5+', label: 'Years shipping production backends' },
    { value: '2', label: 'Enterprise clients supported' },
    { value: '∞', label: 'Reels, carousels & campaigns in flight' },
  ],
};

export type Service = {
  title: string;
  tagline: string;
  description: string;
  icon: IconType;
  accent: 'violet' | 'cyan' | 'amber' | 'rose';
  points: string[];
};

export const services: Service[] = [
  {
    title: 'Backend Engineering',
    tagline: 'Systems that stay honest under load',
    description:
      'Distributed APIs, data models, and background workflows in Java + Spring Boot — designed to be fast, observable, and boring in production.',
    icon: Server,
    accent: 'violet',
    points: ['Microservices & APIs', 'Query & index tuning', 'Kafka, Redis, PostgreSQL'],
  },
  {
    title: 'Content Creation',
    tagline: 'Scroll-stopping stories about building',
    description:
      'Short-form reels, carousels, and long-form threads that turn engineering, brand, and mindset into content that compounds.',
    icon: Film,
    accent: 'rose',
    points: ['Reels & shorts', 'Carousels & threads', 'Creator strategy'],
  },
  {
    title: 'Paid Ads & Growth',
    tagline: 'Turning attention into outcomes',
    description:
      'Meta ad campaigns for creators, coaches, and small businesses — campaign structure, creative testing, and iterating toward the winners.',
    icon: Target,
    accent: 'amber',
    points: ['Meta Ads Manager', 'Creative testing', 'Full-funnel campaigns'],
  },
  {
    title: 'Mentorship',
    tagline: 'Coaching devs through the first mile',
    description:
      'Mentoring students and working professionals at XT Academy on problem solving, system design, and career direction.',
    icon: MessageSquare,
    accent: 'cyan',
    points: ['Problem solving', 'System design', 'Career direction'],
  },
];

export const creator = {
  eyebrow: 'On the internet',
  title: 'I build in code and in public.',
  subtitle:
    'A creator account where I share the engineer’s side of building online — from system design breakdowns to what it takes to grow a personal brand as a developer.',
  handle: profile.instagramHandle,
  handleUrl: profile.socials.instagram,
  pillars: [
    {
      title: 'Engineering',
      description:
        'System design breakdowns, debugging stories, and what backends actually look like in production.',
      icon: Code2,
    },
    {
      title: 'Personal brand',
      description:
        'How devs can turn their work, taste, and story into a compounding online presence.',
      icon: Sparkles,
    },
    {
      title: 'Growth & ads',
      description:
        'What I learn running Meta ad campaigns and building creator systems that scale.',
      icon: LineChart,
    },
  ],
  toolkit: [
    'Instagram Reels',
    'CapCut',
    'Adobe Premiere',
    'Figma',
    'Notion',
    'Meta Ads Manager',
    'Google Ads',
    'Analytics',
  ],
  ctas: [
    { label: 'Follow on Instagram', href: profile.socials.instagram, kind: 'primary' as const },
    { label: 'DM for collabs & briefs', href: `mailto:${profile.email}?subject=Collab%20/%20Creator%20brief`, kind: 'secondary' as const },
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
  art: 'ticket' | 'ai';
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
    art: 'ticket',
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
    art: 'ai',
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
    title: 'Building in public on Instagram',
    description:
      'Sharing engineering, personal brand, and growth as @amann.kabir — reels, carousels, and threads about the craft of building online.',
    icon: Instagram,
    tag: 'Creator',
  },
  {
    title: 'Meta Ads for creators & SMBs',
    description:
      'Running paid ad campaigns end-to-end — from creative testing to full-funnel structure — for creators, coaches, and small businesses.',
    icon: Rocket,
    tag: 'Growth',
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
  title: 'Let’s build, ship, or make something.',
  subtitle:
    'Open to backend roles, creator collabs, ad campaign briefs, and thoughtful conversations about building — in code and in public.',
  actions: [
    { label: 'aman17626@gmail.com', href: 'mailto:aman17626@gmail.com', kind: 'email' as const },
    { label: profile.instagramHandle, href: profile.socials.instagram, kind: 'instagram' as const },
    { label: 'LinkedIn', href: profile.socials.linkedin, kind: 'linkedin' as const },
    { label: 'GitHub', href: profile.socials.github, kind: 'github' as const },
  ],
};
