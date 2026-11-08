export interface ResearchProject {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  researchQuestion: string;
  role: string;
  methodology: string;
  verification: string;
  deliverables: string[];
  learningsAndLimitations: string;
}

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
