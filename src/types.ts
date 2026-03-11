export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  link: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
