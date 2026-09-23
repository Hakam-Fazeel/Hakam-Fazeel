import { FeaturedProject } from './types';

export const aa6082StampingFeatured: FeaturedProject = {
  id: "featured-aa6082-stamping",
  tag: "Imperial College London · Laidlaw Research Scholar",
  title: "Optimising Formability & Sustainability in AA6082 Stamping",
  subtitle: "Fast Automotive Stamping Technology (FAST) Numerical Optimization Using AutoForm CAE",
  summary:
    "Hot-stamping of high-strength AA6082 aluminium alloys was investigated to reduce carbon emissions and part production costs. Multivariate parametric analysis of blank shape, pre-heat temperatures, blank holder force, and press kinematics revealed an optimal processing window eliminating high-strain surface wrinkling and springback deviations.",
  keyMetric: {
    label: "Carbon Footprint",
    value: "-43% CO₂",
    note: "13.27 kg down to 7.52 kg per stamped part"
  },
  author: {
    name: "Hakam Mohamed Fazeel",
    role: "Laidlaw Scholar · Supervised by Dr. Li-Liang Wang"
  },
  image: "stamping.png",
  imageAlt: "AutoForm stamping simulation thickness and wrinkling section analysis",
  githubUrl: "https://github.com/Hakam-Fazeel/Optimising-Formability-and-Sustainability-in-AA6082-Stamping",
  projectId: "aa6082-stamping-autoform",
  period: "Laidlaw Scholars Research",
  diagramType: "autoform"
};

export default aa6082StampingFeatured;
