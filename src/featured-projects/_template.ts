import { FeaturedProject } from './types';

/**
 * ============================================================================
 * FEATURED PROJECT TEMPLATE
 * ============================================================================
 * To add a new featured project slide:
 * 1. Duplicate this file and rename it (e.g. `my-featured-research.ts`).
 * 2. Put your big image inside `/public/featured/` (e.g. `public/featured/my-poster.png`).
 * 3. Update the fields below with your project info and image filename.
 * 4. Open `src/featured-projects/index.ts`:
 *    - Import your project: `import { myFeaturedProject } from './my-featured-research';`
 *    - Add it to the `FEATURED_PROJECTS` array!
 * ============================================================================
 */

export const templateFeaturedProject: FeaturedProject = {
  // Unique slug identifier
  id: "my-featured-project-slug",

  // Eyebrow tag above the title (e.g. university, award, or research domain)
  tag: "Imperial College London · Mechanical Engineering",

  // Large prominent title
  title: "Your Project Title Here: Highlighting Major Numerical Findings",

  // Optional secondary subtitle or research quote
  subtitle: "A concise one-sentence statement summarizing the key engineering milestone.",

  // Summary paragraph explaining the problem, methodology, and outcome
  summary:
    "Describe the engineering problem, simulation software or experimental rig used, and what was achieved in this study. This appears on the left half of the featured slide.",

  // Highlight metric badge (optional)
  keyMetric: {
    label: "Efficiency Gain",
    value: "+35%",
    note: "Compared to standard industry baseline"
  },

  // Author / researcher profile shown in the bottom card header
  author: {
    name: "Hakam Mohamed Fazeel",
    role: "Undergraduate Researcher · Imperial College London",
    // Optional avatar image or leave blank for initials
    avatar: ""
  },

  // The big image taking half of the featured slide!
  // Put your file in `/public/featured/` and specify the filename here:
  image: "my-poster.png",
  imageAlt: "Featured research diagram and simulation results",

  // GitHub repository link (clicking the slide or button takes the user here)
  githubUrl: "https://github.com/Hakam-Fazeel",

  // Optional matching id from `src/projects/` to allow users to view full modal details
  projectId: "aa6082-stamping-autoform",

  // Academic period or date
  period: "Summer 2026",

  // Fallback diagram type if image is loading:
  // 'autoform' | 'ehl-mesh' | 'cad-chassis' | 'robotics' | 'cfd' | 'topology'
  diagramType: "autoform"
};

export default templateFeaturedProject;
