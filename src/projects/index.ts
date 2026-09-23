import { Project, ProjectMetric } from './types';
import { aa6082StampingProject } from './aa6082-stamping';
import { ehlSolversPmdProject } from './ehl-solvers-pmd';

// Re-export types for convenient imports throughout the app
export * from './types';
export * from './categories';

// Re-export individual projects
export {
  aa6082StampingProject,
  ehlSolversPmdProject,
};

/**
 * ============================================================================
 * ALL PORTFOLIO PROJECTS
 * ============================================================================
 * When you add a new project:
 * 1. Duplicate `_template.ts` as `your-project-name.ts` in this folder
 * 2. Import it here
 * 3. Add it to this `PROJECTS` list below
 * ============================================================================
 */
export const PROJECTS: Project[] = [
  aa6082StampingProject,
  ehlSolversPmdProject,
];

export default PROJECTS;
