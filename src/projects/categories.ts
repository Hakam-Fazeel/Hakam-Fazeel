export interface ProjectCategory {
  /**
   * Unique short identifier (e.g. 'all', 'fea', 'tribology', etc.)
   */
  id: string;
  /**
   * Human-readable label displayed on the category filter button
   */
  label: string;
  /**
   * Optional keywords that will match this category in addition to the label/id
   */
  keywords?: string[];
}

/**
 * ============================================================================
 * PORTFOLIO PROJECT CATEGORIES
 * ============================================================================
 * You can edit, add, or remove categories right here!
 *
 * HOW TO EDIT OR ADD CATEGORIES:
 * Simply add or modify an entry in the `PROJECT_CATEGORIES` list below.
 *
 * HOW TO ASSIGN A PROJECT TO A CATEGORY:
 * In any project file in `src/projects/` (e.g. `aa6082-stamping.ts`),
 * set the `category` field to either:
 * 1. The category's `label` (e.g. category: "FEA & CAE Simulation")
 * 2. Or the category's `id` (e.g. category: "fea")
 * ============================================================================
 */
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'all',
    label: 'All Projects',
  },
  {
    id: 'fea',
    label: 'FEA & CAE Simulation',
    keywords: ['fea', 'cae', 'autoform', 'stamping', 'finite element', 'ansys', 'abaqus', 'solidworks'],
  },
  {
    id: 'solvers',
    label: 'Numerical Solvers',
    keywords: ['solvers', 'tribology', 'ehl', 'matlab', 'pmd', 'lubrication', 'contact mechanics'],
  },
  {
    id: 'thermo-fluids',
    label: 'Thermo-Fluids & CFD',
    keywords: ['thermo', 'fluids', 'cfd', 'heat transfer', 'openfoam', 'aerodynamics'],
  },
];

export default PROJECT_CATEGORIES;
