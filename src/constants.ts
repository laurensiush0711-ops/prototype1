import { Experience, Project, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Forgefun Studio',
    role: 'QA Tester (AI Tester)',
    period: 'Dec 2023 – Nov 2024',
    description: [
      'Tested and documented 3 AI-generated character iterations using Notion, resulting in a 65% reduction in recurring dialogue anomalies.',
      'Optimized AI character prompts to maintain compatibility with current AI chat systems, increasing contextual accuracy by 30%.',
      'Evaluated alternative LLM models to optimize token allocation, reducing token usage and lowering operational cost by 12%.',
      'Validated API integration between game features and AI characters using Postman and Telegram coordination.'
    ]
  },
  {
    id: '2',
    company: 'Forgefun Studio',
    role: 'QA Tester (Game Tester)',
    period: 'Aug 2023 – Dec 2024',
    description: [
      'Tested game features across 4 prototypes and 1 main project from Unity to Notion with over 120 recorded bugs.',
      'Analyzed and categorized issues by urgency, repetition, and project impact in Notion, reducing investigation time by 30%.',
      'Validated API responses in Postman and Firebase during feature development, increasing system reliability by 20%.',
      'Monitored demo builds for target platform showcases with structured regression tracking, reducing critical pre-release issues by 15%.'
    ]
  },
  {
    id: '3',
    company: 'Wisgames',
    role: 'Game Designer',
    period: 'June 2022 – June 2023',
    description: [
      'Designed 50+ character concepts, UX/UI, core mechanics, and balancing formulas using Canva and Notion.',
      'Documented over 20 feature and mechanic concepts inside the Game Design Document (GDD), improving clarity by 50%.',
      'Assigned tasks for 5 team members aligned with project milestones, improving workflow coordination by 25%.',
      'Tested feature updates inside Unity against design specifications, reducing design-implementation gaps by 40%.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Steam Market Analysis',
    shortDescription: 'Deep dive into 65,000+ Steam games to identify success factors.',
    fullDescription: 'Analyzed 65,751 Steam games across 9 genres and 58 categories using Python (Google Colab). Identified factors linked to Metacritic scores ≥75 and summarized market trends using Tableau. Proposed a Premium Strategy approach for indie studios to stand out in a competitive market.',
    image: 'https://picsum.photos/seed/steam/800/600',
    link: 'https://github.com',
    tags: ['Python', 'Tableau', 'Data Analytics', 'Market Research']
  },
  {
    id: 'p2',
    title: 'Red Covenant',
    shortDescription: 'QA & Gameplay optimization for a major game project.',
    fullDescription: 'Documented over 120 bugs in Notion with structured categorization. Tested and validated game features including API, web components, and AI chat using Unity, Firebase, and Postman. Provided gameplay improvement insights based on genre benchmarking, contributing to 20% fewer post-update revisions.',
    image: 'https://picsum.photos/seed/covenant/800/600',
    link: 'https://github.com',
    tags: ['Unity', 'Firebase', 'Postman', 'QA']
  },
  {
    id: 'p3',
    title: '2D Platform Fighter',
    shortDescription: 'University Thesis Project: A fighter game with resource management.',
    fullDescription: 'Developed a Two-Dimensional Platform Fighter Game Product with Resource Management Features as a Bachelor of Computer Science thesis. Focused on balancing core combat mechanics with strategic resource systems.',
    image: 'https://picsum.photos/seed/fighter/800/600',
    link: 'https://github.com',
    tags: ['Unity', 'C#', 'Game Design', 'Thesis']
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Data & Analytics',
    skills: ['Python', 'SQL', 'Tableau', 'Data Visualization', 'EDA', 'Spreadsheets']
  },
  {
    category: 'Game Dev & QA',
    skills: ['Unity', 'Game Balancing', 'Manual Testing', 'GDD', 'Firebase', 'Postman']
  },
  {
    category: 'Tools & AI',
    skills: ['AI Prompting', 'Notion', 'Javascript', 'Canva', 'LLM Evaluation']
  }
];
