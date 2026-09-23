import { Project } from './types';

export const ehlSolversPmdProject: Project = {
  id: "ehl-solvers-mesh-densification",
  title: "Computational Acceleration of EHL Solvers via Progressive Mesh Densification",
  subtitle: "MATLAB Numerical Acceleration for Elastohydrodynamic Lubrication",
  category: "Computational Mechanics & Tribology",
  period: "UROP Exhibition 2026",
  supervisor: "Dr. Suhaib Ardah",
  institution: "Imperial College London",
  abstract: "Elastohydrodynamic Lubrication (EHL) solvers model complex non-Newtonian lubricant interactions between heavily loaded contact surfaces such as roller bearings. While providing precise pressure and film thickness distributions, high-resolution grids suffer from prohibitive computation times. This research deployed Progressive Mesh Densification (PMD) in MATLAB, passing iterative solutions across successively refined grids.",
  methodology: [
    "Adapted non-linear EHL solver in MATLAB to compute iterative hydrodynamic pressure and lubricant film thickness",
    "Engineered a Progressive Mesh Densification (PMD) pipeline utilizing bicubic 2D interpolation between coarse and fine grid nodes",
    "Executed benchmark trials across standard meshes (256×96, 512×96, 1024×96) measuring iteration count and Wall-clock convergence time",
    "Extracted empirical numerical time prediction fits verifying zero divergence or loss of solution fidelity"
  ],
  keyFindings: [
    "92.7% computation time reduction on 1024×96 mesh (from 389.4 min standard down to 28.4 min with PMD)",
    "82.8% time reduction on 512×96 mesh (100.1 min down to 17.2 min)",
    "59.1% time reduction on 256×96 mesh (25.7 min down to 10.5 min)",
    "Pre-interpolation initialization enables the solver to reach error tolerances at a fraction of computational iterations"
  ],
  metrics: [
    { label: "1024×96 Solve Time", value: "28.4 min", change: "-92.7%", isPositive: true },
    { label: "512×96 Solve Time", value: "17.2 min", change: "-82.8%", isPositive: true },
    { label: "256×96 Solve Time", value: "10.5 min", change: "-59.1%", isPositive: true },
    { label: "Pressure Accuracy", value: "100%", isPositive: true }
  ],
  techStack: ["MATLAB", "EHL Solvers", "Progressive Mesh Densification", "2D Interpolation", "Tribology"],
  githubUrl: "https://github.com/Hakam-Fazeel/Computational-Acceleration-of-EHL-Solvers-via-PMD",
  featured: true,
  diagramType: "ehl-mesh",
  imagePlaceholderAlt: "Progressive Mesh Densification cycle and 2D interpolation comparison",

  // --------------------------------------------------------------------------
  // THUMBNAIL IMAGE (Modular image configuration)
  // --------------------------------------------------------------------------
  // Drop your image into `/public/projects/` (e.g. `/public/projects/ehl.png`)
  // and specify thumbnail: "ehl.png" (or full URL).
  // If empty, falls back to the clean vector diagram.
  thumbnail: "EHL Solver.png",

  // --------------------------------------------------------------------------
  // FINER DETAILS (Expanded Modal View)
  // --------------------------------------------------------------------------
  dataTables: [
    {
      title: "Progressive Mesh Densification (PMD) Execution Times",
      subtitle: "MATLAB Solver Benchmark Comparison · Zero Divergence",
      headers: ["Mesh Size", "Standard Solver (min)", "PMD Method (min)", "Time Reduction"],
      rows: [
        ["256 × 96", "25.7 min", "10.5 min", "-59.1%"],
        ["512 × 96", "100.1 min (1.67 hrs)", "17.2 min", "-82.8%"],
        ["1024 × 96", "389.4 min (6.5 hrs)", "28.4 min", "-92.7%"]
      ],
      highlightColumnIndex: 3,
      highlightRowIndex: 2
    }
  ],

  equations: [
    {
      name: "Non-Newtonian Reynolds Equation",
      formula: "∂/∂x ( (ρ h³)/(12 η*) ∂p/∂x ) + ∂/∂y ( (ρ h³)/(12 η*) ∂p/∂y ) = u_m ( ∂(ρ h)/∂x )",
      description: "Governing hydrodynamic pressure distribution across lubricant contact zone"
    },
    {
      name: "Elastic Film Thickness Distribution",
      formula: "h(x, y) = h₀ + (x²)/(2 R_x) + (y²)/(2 R_y) + (2 / π E') ∬ (p(x', y')) / (√((x-x')² + (y-y')²)) dx' dy'",
      description: "Boussinesq integral representing total elastic deformation of contacting solids"
    }
  ]
};

export default ehlSolversPmdProject;
