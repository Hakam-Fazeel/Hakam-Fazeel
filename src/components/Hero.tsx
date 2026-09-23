import React from 'react';
import { Github, Mail, ArrowDown, GraduationCap, Building2, Cpu, Wrench } from 'lucide-react';
import { USER_INFO } from '../data/projects';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200 bg-white">
      {/* Subtle background engineering grid line pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Institution & scholar tag (Zero-pill discipline: unboxed clean typographic metadata) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-500 mb-4">
            <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <Building2 className="w-3.5 h-3.5 text-sky-700" />
              Imperial College London
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-600">Department of Mechanical Engineering</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-sky-800 font-medium">Laidlaw Scholar</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Mechanical Engineering Portfolio
          </h1>

          {/* Subheading / Bio */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Hi, I&apos;m <span className="text-slate-900 font-semibold">{USER_INFO.name}</span>, a mechanical engineering undergraduate at Imperial College London. 
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={USER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors text-xs sm:text-sm font-medium shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repositories</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-colors text-xs sm:text-sm font-medium"
            >
              <ArrowDown className="w-4 h-4" />
              <span>View Project Grid</span>
            </a>

            <a
              href={`mailto:${USER_INFO.email}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm text-slate-500 hover:text-slate-900 font-mono transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{USER_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
