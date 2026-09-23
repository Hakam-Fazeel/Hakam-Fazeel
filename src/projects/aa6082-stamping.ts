import { Project } from './types';

export const aa6082StampingProject: Project = {
  id: "aa6082-stamping-autoform",
  title: "Optimising Formability & Sustainability in AA6082 Stamping",
  subtitle: "A Numerical Approach Using AutoForm CAE Simulations",
  category: "CAE Simulation & Sustainable Manufacturing",
  period: "Laidlaw Scholars Research Project",
  supervisor: "Dr. Li-Liang Wang",
  institution: "Imperial College London",
  abstract: "High-strength aluminium alloys such as AA6082 are widely utilized for automotive lightweighting. Leveraging Fast Automotive Stamping Technology (FAST), this study compiled an optimized manufacturing process minimizing manufacturing cost and carbon footprint without compromising part strength, surface formability, or structural integrity.",
  methodology: [
    "Built parametric AutoForm CAE finite element model for automotive test specimen",
    "Conducted multivariate optimization across forming temperature, blank shape, blank holder force, and press speed",
    "Extracted numerical section plots across critical drawn profiles for thickness variance and springback analysis",
    "Calculated cost & carbon emission factors using regional industrial energy and raw aluminium data in Ningbo, China"
  ],
  keyFindings: [
    "Estimated 43% reduction in overall CO₂ emissions per part (13.27 kg down to 7.52 kg)",
    "30.9% overall manufacturing cost reduction (£2.92 down to £2.02 per stamped part)",
    "42.0% reduction in total manufacturing cycle time",
    "82.8% reduction in medium/high surface wrinkling",
    "18.3% decrease in maximum springback angle with tightened thickness tolerances"
  ],
  metrics: [
    { label: "CO₂ Emissions", value: "-43%", isPositive: true },
    { label: "Cost / Part", value: "£2.02", change: "-30.9%", isPositive: true },
    { label: "Cycle Time", value: "-42.0%", isPositive: true },
    { label: "Wrinkling", value: "-82.8%", isPositive: true }
  ],
  techStack: ["AutoForm CAE", "AA6082-T6", "Finite Element Analysis", "Parametric Optimization", "Carbon Accounting"],
  githubUrl: "https://github.com/Hakam-Fazeel/Optimising-Formability-and-Sustainability-in-AA6082-Stamping",
  featured: true,
  diagramType: "autoform",
  imagePlaceholderAlt: "AutoForm stamping simulation thickness and wrinkling section analysis",

  // --------------------------------------------------------------------------
  // THUMBNAIL IMAGE (Modular image configuration)
  // --------------------------------------------------------------------------
  // To use your own image:
  // 1. Drop your image into `/public/projects/` (e.g. `/public/projects/stamping.png`)
  // 2. Set: thumbnail: "stamping.png" (or full URL like "https://...")
  // If left undefined or empty, it automatically falls back to the clean vector diagram above.
  thumbnail: "stamping.png",

  // --------------------------------------------------------------------------
  // FINER DETAILS (Expanded Modal View)
  // --------------------------------------------------------------------------
  // Experimental data tables rendered in the expanded card view:
  dataTables: [
    {
      title: "Part Cost (GBP)",
      subtitle: "Ningbo Manufacturing Model · -30.9% overall reduction",
      headers: ["Component", "Base", "Optimised"],
      rows: [
        ["Material", "£1.69", "£1.41"],
        ["Energy", "£1.23", "£0.62"],
        ["Total", "£2.92", "£2.02"]
      ],
      highlightColumnIndex: 2
    },
    {
      title: "Emitted CO₂ (kg / part)",
      subtitle: "Ningbo Manufacturing Model · -43.0% overall reduction",
      headers: ["Factor", "Base", "Optimised"],
      rows: [
        ["Material", "2.69 kg", "2.23 kg"],
        ["Energy", "10.58 kg", "5.29 kg"],
        ["Total", "13.27 kg", "7.52 kg"]
      ],
      highlightColumnIndex: 2
    }
  ],

  // Numerical comparison grid shown in expanded card view:
  comparisonGrids: [
    {
      title: "Global Numerical Results Comparison",
      subtitle: "FAST Technology Parametric Optimization vs Base Tooling",
      items: [
        { label: "Max Thickness", value: "+2.1%" },
        { label: "Min Thickness", value: "+6.5%" },
        { label: "Max Springback", value: "-18.3%", isPositive: true },
        { label: "High Wrinkling", value: "-82.8%", isPositive: true },
        { label: "Cycle Time", value: "-42.0%", isPositive: true }
      ]
    }
  ]
};

export default aa6082StampingProject;
