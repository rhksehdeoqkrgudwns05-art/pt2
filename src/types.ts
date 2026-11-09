export interface BaseProject {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  role: string;
  projectType: 'research' | 'web';
}

export interface ResearchProject extends BaseProject {
  projectType: 'research';
  researchQuestion: string;
  methodology: string;
  verification: string;
  deliverables: string[];
  learningsAndLimitations: string;
}

export interface WebProject extends BaseProject {
  projectType: 'web';
  purpose: string;
  features: string;
  processAndRole: string;
  scopeAndStorage: string;
  liveUrl: string;
  codeUrl: string;
}

export type PortfolioProject = ResearchProject | WebProject;

export interface InterestArea {
  id: string;
  title: string;
  description: string;
  index: string;
}

export interface ActivityExperience {
  id: string;
  title: string;
  role: string;
  description: string;
  index: string;
}
