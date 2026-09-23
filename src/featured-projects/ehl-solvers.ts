import { FeaturedProject } from './types';

export const ehlSolversFeatured: FeaturedProject = {
  id: "featured-ehl-solvers",
  tag: "Imperial College London · UROP Research Exhibition 2026",
  title: "Computational Acceleration of EHL Solvers via Progressive Mesh Densification",
  subtitle: "Numerical Optimization Pipeline for Non-Newtonian Contact Mechanics in MATLAB",
  summary:
    "Elastohydrodynamic lubrication simulations for heavily loaded rolling contacts demand dense spatial discretizations that incur long Wall-clock computation times. By introducing bicubic 2D solution interpolation between progressively refined grid hierarchies (256×96 to 1024×96), initial iterative residuals were slashed with zero solution divergence.",
  keyMetric: {
    label: "Wall-Clock Solve Time",
    value: "-92.7%",
    note: "1024×96 mesh solve time reduced from 389.4 min to 28.4 min"
  },
  author: {
    name: "Hakam Mohamed Fazeel",
    role: "UROP Researcher · Supervised by Dr. Suhaib Ardah"
  },
  image: "EHL Solver.png",
  imageAlt: "Progressive Mesh Densification cycle and 2D interpolation comparison",
  githubUrl: "https://github.com/Hakam-Fazeel/Computational-Acceleration-of-EHL-Solvers-via-PMD",
  projectId: "ehl-solvers-mesh-densification",
  period: "UROP Exhibition 2026",
  diagramType: "ehl-mesh"
};

export default ehlSolversFeatured;
