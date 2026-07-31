// All copy in this file is editable — replace project details, links and
// numbers with your own as your work evolves.

export const profile = {
  name: 'Punit Kumar',
  role: 'Data Analyst & ML Engineer',
  tagline: 'Building AI-powered, data-driven products',
  headline:
    'I turn raw data into decisions, and ideas into AI-powered products people actually use.',
  location: 'Faizabad, Uttar Pradesh, India',
  email: 'punit1503ayo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thepunitchaudhary',
  github: 'https://github.com/', // update with your GitHub username
  resumeUrl: '/resume.pdf',
  summary:
    "I didn't start with a perfect roadmap — I started with curiosity. That curiosity led me from writing my first Python program to building AI and data-driven applications that solve real problems. Along the way I learned that data isn't just numbers; it's the foundation for better decisions.",
  education: {
    degree: 'Master of Computer Applications (MCA), Computer Science',
    school: 'Dr. Ram Manohar Lohia Avadh University',
    period: 'Aug 2024 — Jul 2026',
  },
}

export const stats = [
  { label: 'Projects Shipped', value: 6, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Internships', value: 1 },
  { label: 'Certifications', value: 9, suffix: '+' },
  { label: 'Years Learning', value: 3, suffix: '+' },
]

export type SkillCategory = 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'AI & Data' | 'Cloud & Tools'

export interface Skill {
  name: string
  level: number // 0-100
  category: SkillCategory
}

export const skills: Skill[] = [
  // Programming
  { name: 'Python', level: 92, category: 'Programming' },
  { name: 'SQL', level: 90, category: 'Programming' },
  { name: 'Java', level: 70, category: 'Programming' },
  { name: 'C++', level: 65, category: 'Programming' },
  { name: 'JavaScript', level: 75, category: 'Programming' },
  // Frontend
  { name: 'HTML', level: 85, category: 'Frontend' },
  { name: 'CSS', level: 80, category: 'Frontend' },
  { name: 'React.js', level: 72, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 75, category: 'Frontend' },
  // Backend
  { name: 'FastAPI', level: 85, category: 'Backend' },
  { name: 'Node.js', level: 65, category: 'Backend' },
  { name: 'Express.js', level: 62, category: 'Backend' },
  { name: 'REST APIs', level: 88, category: 'Backend' },
  // Database
  { name: 'MySQL', level: 85, category: 'Database' },
  { name: 'PostgreSQL', level: 78, category: 'Database' },
  { name: 'MongoDB', level: 68, category: 'Database' },
  // AI & Data
  { name: 'Machine Learning', level: 88, category: 'AI & Data' },
  { name: 'Pandas', level: 90, category: 'AI & Data' },
  { name: 'NumPy', level: 87, category: 'AI & Data' },
  { name: 'Scikit-learn', level: 85, category: 'AI & Data' },
  { name: 'TensorFlow', level: 70, category: 'AI & Data' },
  { name: 'Power BI', level: 90, category: 'AI & Data' },
  { name: 'Excel', level: 88, category: 'AI & Data' },
  { name: 'Generative AI', level: 84, category: 'AI & Data' },
  { name: 'Prompt Engineering', level: 86, category: 'AI & Data' },
  // Cloud & Tools
  { name: 'AWS', level: 62, category: 'Cloud & Tools' },
  { name: 'Azure', level: 60, category: 'Cloud & Tools' },
  { name: 'Docker', level: 58, category: 'Cloud & Tools' },
  { name: 'Git', level: 88, category: 'Cloud & Tools' },
  { name: 'GitHub', level: 88, category: 'Cloud & Tools' },
  { name: 'Power BI Desktop', level: 90, category: 'Cloud & Tools' },
]

export interface Project {
  id: string
  name: string
  description: string
  tech: string[]
  category: 'AI/ML' | 'Data Analytics' | 'Web App'
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'ai-hospital-assistant',
    name: 'AI Hospital Assistant',
    description:
      'A voice-enabled hospital assistant built with FastAPI and LLMs that streamlines appointment booking and answers patient queries, cutting down front-desk wait times.',
    tech: ['Python', 'FastAPI', 'LLMs', 'Voice Interaction'],
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'foodlink-ai',
    name: 'FoodLink AI',
    description:
      'A platform connecting restaurants with NGOs through intelligent, data-driven matching to route surplus food to where it is needed and cut food waste.',
    tech: ['Python', 'FastAPI', 'Machine Learning', 'SQL'],
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'weather-air-quality-dashboard',
    name: 'Weather & Air Quality Dashboard',
    description:
      'An interactive Power BI dashboard that transforms raw weather and air-quality datasets into a clear, explorable view of pollution trends by region and season.',
    tech: ['Power BI', 'Excel', 'Data Analytics'],
    category: 'Data Analytics',
    featured: true,
  },
  {
    id: 'customer-churn-prediction',
    name: 'Customer Churn Prediction',
    description:
      'A classification model that flags customers likely to churn from usage and billing history, built to help a subscription business prioritize retention outreach.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    category: 'AI/ML',
  },
  {
    id: 'sql-sales-analytics',
    name: 'SQL Sales Analytics Suite',
    description:
      'A set of SQL views and a reporting layer that turn a transactional sales database into cohort, retention and revenue-trend reports for a small retail chain.',
    tech: ['SQL', 'MySQL', 'Power BI'],
    category: 'Data Analytics',
  },
  {
    id: 'portfolio-site',
    name: 'This Portfolio',
    description:
      'A performance-tuned personal site built with React, TypeScript and Framer Motion, designed to read clearly for both recruiters and applicant-tracking systems.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web App',
  },
]

export interface ExperienceItem {
  title: string
  company: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Data Science Intern',
    company: 'Emerging Technologies',
    period: 'Jan 2026 — Mar 2026',
    points: [
      'Built REST APIs with FastAPI and relational-database integration, taking features from design through to delivery.',
      'Developed Python solutions independently, collaborating with the team through Git and GitHub across the build.',
      'Worked on data preprocessing, SQL-based analysis, automation and reporting workflows during a hands-on Python developer track.',
    ],
  },
]

export interface Certification {
  name: string
  issuer: string
}

export const certifications: Certification[] = [
  { name: 'Generative AI for Executives', issuer: 'Issued Certification' },
  { name: 'Microsoft Certified: SQL AI Developer Associate', issuer: 'Microsoft' },
  { name: 'Basics of Data Analytics', issuer: 'Issued Certification' },
  { name: 'Google AI Essentials', issuer: 'Google' },
  { name: 'Data Science Job Simulation', issuer: 'Lloyds Banking Group (Forage)' },
  { name: 'Oracle Cloud Data Science', issuer: 'Oracle' },
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI' },
  { name: 'AWS AI & Machine Learning', issuer: 'Amazon Web Services' },
  { name: 'IBM Data Science Professional', issuer: 'IBM' },
  { name: 'GenAI Data Analytics Job Simulation', issuer: 'TATA (Forage)' },
]

export const skillCategories: SkillCategory[] = [
  'Programming',
  'Frontend',
  'Backend',
  'Database',
  'AI & Data',
  'Cloud & Tools',
]
