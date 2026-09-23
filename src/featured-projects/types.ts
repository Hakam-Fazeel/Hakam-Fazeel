export interface FeaturedProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface FeaturedAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface FeaturedProject {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  summary: string;
  keyMetric?: FeaturedProjectMetric;
  author: FeaturedAuthor;
  /**
   * Big image taking half of the featured slide!
   * Place your image in `/public/featured/` (e.g. 'stamping-poster.png' or '/featured/stamping-poster.png')
   * or use a full URL.
   */
  image: string;
  imageAlt?: string;
  githubUrl: string;
  projectId?: string;
  period?: string;
  diagramType?: 'autoform' | 'ehl-mesh' | 'cad-chassis' | 'robotics' | 'cfd' | 'topology';
}
