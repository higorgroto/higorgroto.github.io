export interface ProjectFrontmatter {
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  excerpt: string;
  excerpt_en: string;
  date: Date;
  cover: string;
  gallery?: string[];
  videos?: VideoEntry[];
  phases?: ProjectPhase[];
  search?: string;
}

export interface VideoEntry {
  type: 'local' | 'youtube';
  src: string;
  title?: string;
  title_en?: string;
  poster?: string;
}

export interface ProjectPhase {
  title: string;
  title_en: string;
  text?: string;
  text_en?: string;
  gallery?: string[];
  videos?: VideoEntry[];
}

export interface Project {
  id: string;
  slug: string;
  collection: 'projects';
  data: ProjectFrontmatter;
  body: string;
  rendered?: {
    html: string;
  };
}

export type Lang = 'pt' | 'en';
