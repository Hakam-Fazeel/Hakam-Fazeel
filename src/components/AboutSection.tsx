import React from 'react';
import { USER_INFO } from '../data/projects';
import { GraduationCap, Award, BookOpen, Wrench, Code2, Cpu, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skillCategories = [
    {
      title: "CAE & Finite Element Analysis",
      skills: ["SolidWorks", "MATLAB"]
    },
    {
      title: "Scientific Computing & Code",
      skills: ["MATLAB & Simulink", "Python (NumPy, SciPy, Matplotlib)"]
    },
    {
      title: "CAD & Mechanical Design",
      skills: ["SolidWorks", "OnShape"]
    },
    {
      title: "Core Engineering Domains",
      skills: ["Solid Mechanics", "Thermo-fluids", "Mechatronics"]
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Academic Background & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono text-sky-800 font-semibold uppercase tracking-wider mb-1">
                Background & Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                About Hakam Mohamed Fazeel
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              I am a mechanical engineering undergraduate at <strong className="text-slate-800">Imperial College London</strong> with a passion for integrating computational mechanics, finite element simulations, and numerical programming to solve high-impact engineering challenges.
            </p>

            {/* Academic milestones card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-50 text-sky-800 shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500">Degree & Institution</div>
                  <div className="text-sm font-bold text-slate-900">MEng Mechanical Engineering</div>
                  <div className="text-xs text-slate-600">Imperial College London · Department of Mechanical Engineering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Skill Matrix (7 cols) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono text-sky-800 font-semibold uppercase tracking-wider mb-1">
              Capabilities Matrix
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-5">
              Technical Tooling & Methodologies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-xs">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-3 pb-2 border-b border-slate-100">
                    {cat.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* University affiliations badge bar */}
            <div className="mt-5 p-3.5 bg-slate-100/80 rounded-lg text-xs font-mono text-slate-600 flex flex-wrap items-center justify-between gap-2">
              <span className="text-slate-800 font-semibold">Imperial College London Mechanical Engineering</span>
              <span className="text-slate-500">London SW7 2AZ, United Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
