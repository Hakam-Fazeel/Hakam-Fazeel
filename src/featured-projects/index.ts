import { FeaturedProject } from './types';
import { aa6082StampingFeatured } from './aa6082-stamping';
import { ehlSolversFeatured } from './ehl-solvers';

export * from './types';
export {
  aa6082StampingFeatured,
  ehlSolversFeatured,
};

/**
 * ============================================================================
 * FEATURED PROJECTS (HORIZONTAL SLIDES)
 * ============================================================================
 * When you want to add a new featured project:
 * 1. Duplicate `_template.ts` as `my-new-featured.ts` in this folder
 * 2. Put your large image in `/public/featured/`
 * 3. Import and add it to the `FEATURED_PROJECTS` array below!
 * ============================================================================
 */
export const FEATURED_PROJECTS: FeaturedProject[] = [
  aa6082StampingFeatured,
  ehlSolversFeatured,
];

export default FEATURED_PROJECTS;
