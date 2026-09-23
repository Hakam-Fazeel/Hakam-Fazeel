import { Project } from './types';

/**
 * ============================================================================
 * NEW PROJECT TEMPLATE
 * ============================================================================
 * To add a new project to your portfolio:
 * 1. Duplicate this file and rename it (e.g. `gearbox-design.ts`).
 * 2. Update the fields below with your project's details and your GitHub repository link.
 * 3. Open `src/projects/index.ts`:
 *    - Import your project: `import { myProject } from './gearbox-design';`
 *    - Add it to the `PROJECTS` array: `export const PROJECTS: Project[] = [ ..., myProject ];`
 * ============================================================================
 */

export const templateProject: Project = {
  // Unique slug identifier for the project (lowercase, hyphens)
  id: "project-slug-here",

  // Project title and subtitle
  title: "Your Project Title Here",
  subtitle: "A brief secondary subtitle describing the methodology or objective",

  // Category shown on cards and used for filter tabs
  // You can set this to any predefined category in `src/projects/categories.ts`
  // (e.g. "FEA & CAE Simulation", "Numerical Solvers & Tribology", "Automotive & Design", etc.)
  // OR type any custom category name you like — it will automatically get its own filter button!
  category: "FEA & CAE Simulation",

  // Academic or project timeline
  period: "Year 3 Design Project · 2026",

  // Optional supervisor or research lead
  supervisor: "Dr. Supervisor Name",

  // University or department
  institution: "Imperial College London",

  // Comprehensive abstract describing the engineering challenge and approach
  abstract:
    "Write a concise overview of the problem, engineering physics, tools used, and the overall outcome of the project.",

  // Step-by-step methodology points
  methodology: [
    "Step 1: Problem formulation, boundary conditions, and material selection",
    "Step 2: Computational model setup (FEA / CFD / CAD / MATLAB)",
    "Step 3: Parametric design iterations and sensitivity analysis",
    "Step 4: Experimental validation or comparison against benchmark literature"
  ],

  // Quantified key outcomes and findings
  keyFindings: [
    "Achieved significant weight/stress/efficiency optimization",
    "Verified structural integrity with factor of safety > 1.5",
    "Validated numerical convergence with less than 2% discretization error"
  ],

  // Key quantitative metrics shown on cards (2-4 metrics recommended)
  metrics: [
    { label: "Efficiency", value: "+18.5%", isPositive: true },
    { label: "Mass Reduction", value: "2.4 kg", change: "-15%", isPositive: true },
    { label: "Safety Factor", value: "1.85", isPositive: true }
  ],

  // Tools, software, and engineering disciplines
  techStack: ["SolidWorks", "ANSYS FEA", "MATLAB", "Additive Manufacturing"],

  // GitHub repository link for this specific project
  // When the card is clicked, the user will be redirected here!
  githubUrl: "https://github.com/Hakam-Fazeel",

  // Set to true if you want this to be featured prominently
  featured: false,

  // --------------------------------------------------------------------------
  // THUMBNAIL & MODAL IMAGES
  // --------------------------------------------------------------------------
  // To use your own image as the project card thumbnail:
  // 1. Drop your image file into `/public/projects/` (e.g. `public/projects/my-image.png`)
  // 2. Set: thumbnail: "my-image.png" (or full external URL: "https://...")
  // (If left empty, it will display the clean interactive engineering diagram fallback below!)
  thumbnail: "",

  // Optional: A separate high-resolution image/poster when the card is expanded
  modalImage: "",

  // Technical schematic/diagram fallback to display if no custom thumbnail is provided:
  // Options: 'autoform' | 'ehl-mesh' | 'cad-chassis' | 'robotics' | 'cfd' | 'topology'
  diagramType: "cad-chassis",

  // Accessibility alt text
  imagePlaceholderAlt: "CAD model and finite element analysis visualization",

  // --------------------------------------------------------------------------
  // FINER DETAILS (Expanded Card Modal)
  // --------------------------------------------------------------------------
  // Optional experimental data tables to display in the expanded modal:
  dataTables: [
    {
      title: "Sample Experimental Benchmark Table",
      subtitle: "Comparison against baseline configuration",
      headers: ["Parameter", "Baseline", "Optimised", "Improvement"],
      rows: [
        ["Peak Von Mises Stress", "240 MPa", "185 MPa", "-22.9%"],
        ["Deflection Under Load", "1.8 mm", "1.1 mm", "-38.9%"],
        ["Total Component Mass", "4.2 kg", "3.4 kg", "-19.0%"]
      ],
      highlightColumnIndex: 3
    }
  ],

  // Optional numerical comparison grid in expanded modal:
  comparisonGrids: [
    {
      title: "Design Parameters Comparison",
      subtitle: "Iterative FEA Optimization vs Initial Geometry",
      items: [
        { label: "Max Stress", value: "185 MPa", isPositive: true },
        { label: "Weight Saving", value: "-19.0%", isPositive: true },
        { label: "Safety Margin", value: "1.92", isPositive: true }
      ]
    }
  ],

  // Optional mathematical formulas / governing equations:
  equations: [
    {
      name: "Von Mises Yield Criterion",
      formula: "σ_v = √[ 0.5 * ( (σ₁ - σ₂)² + (σ₂ - σ₃)² + (σ₃ - σ₁)² ) ]",
      description: "Predicts onset of plastic yielding under multi-axial stress states"
    }
  ]
};

export default templateProject;
