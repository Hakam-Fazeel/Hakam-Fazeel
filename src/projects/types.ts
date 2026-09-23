export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface ProjectDataTable {
  title: string;
  subtitle?: string;
  headers: string[];
  rows: (string | number)[][];
  highlightColumnIndex?: number;
  highlightRowIndex?: number;
}

export interface ProjectComparisonItem {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface ProjectComparisonGrid {
  title: string;
  subtitle?: string;
  items: ProjectComparisonItem[];
}

export interface ProjectEquation {
  name: string;
  formula: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  supervisor?: string;
  institution: string;
  abstract: string;
  methodology: string[];
  keyFindings: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  githubUrl: string;
  featured: boolean;
  posterId?: string;
  diagramType: 'autoform' | 'ehl-mesh' | 'cad-chassis' | 'robotics' | 'cfd' | 'topology';
  imagePlaceholderAlt: string;
  /**
   * Optional thumbnail image:
   * - Place your image file in `/public/projects/` (e.g. 'my-thumbnail.png')
   * - Or enter a full URL (e.g. 'https://...')
   * If omitted, a clean interactive vector engineering diagram will be displayed as fallback.
   */
  thumbnail?: string;
  /**
   * Optional separate high-resolution image or poster displayed inside the expanded card view.
   * If omitted, the `thumbnail` will be used.
   */
  modalImage?: string;
  /**
   * Optional structured experimental data tables to display in the expanded card view
   */
  dataTables?: ProjectDataTable[];
  /**
   * Optional numerical comparison grids to display in the expanded card view
   */
  comparisonGrids?: ProjectComparisonGrid[];
  /**
   * Optional governing mathematical equations or formulations
   */
  equations?: ProjectEquation[];
}
