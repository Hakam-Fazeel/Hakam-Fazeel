/**
 * Projects have been modularized into individual files inside `/src/projects/`.
 * 
 * To add or edit projects:
 * - Go to `/src/projects/`
 * - Duplicate `_template.ts` as `my-new-project.ts`
 * - Register it in `/src/projects/index.ts`
 */

export * from '../projects/types';
export * from '../projects';
export * from './user';
