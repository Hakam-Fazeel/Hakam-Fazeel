import React from 'react';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  // Clicking the main card opens GitHub repo
  const handleCardClick = (e: React.MouseEvent) => {
    // If user clicked the "Expand card" button specifically, don't trigger the whole card link
    if ((e.target as HTMLElement).closest('.prevent-card-nav')) {
      return;
    }
    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      onClick={handleCardClick}
      className="group cursor-pointer flex flex-col bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-400 transition-all duration-200 overflow-hidden text-left focus-within:ring-2 focus-within:ring-sky-600 focus-within:outline-hidden"
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
        }
      }}
      aria-label={`Project: ${project.title}. Opens GitHub repository in new tab.`}
    >
      {/* 1. Thumbnail */}
      <div className="relative">
        <ProjectThumbnail project={project} />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/95 text-slate-900 text-xs font-medium shadow-md backdrop-blur-xs">
            <Github className="w-3.5 h-3.5" />
            Open on GitHub
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* 2. Heading */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
            {project.title}
          </h3>

          {/* 3. Category */}
          <p className="mt-1.5 text-xs font-mono font-medium text-sky-700">
            {project.category}
          </p>

          {/* 4. Short description */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {project.abstract}
          </p>

          {/* 5. Keywords at the bottom */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-600 border border-slate-200/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Actions Bar */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          {/* Expand card button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(project);
            }}
            className="prevent-card-nav inline-flex items-center gap-1.5 text-slate-700 hover:text-sky-700 font-medium py-1 px-2 -ml-2 rounded-md hover:bg-slate-100 transition-colors"
            title="Expand card for full details, methodology, and numerical findings"
          >
            <Maximize2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Expand card</span>
          </button>

          {/* GitHub link indicator */}
          <div className="inline-flex items-center gap-1.5 text-sky-700 font-medium group-hover:translate-x-0.5 transition-transform">
            <Github className="w-3.5 h-3.5" />
            <span>github.com</span>
            <ExternalLink className="w-3 h-3 text-sky-600" />
          </div>
        </div>
      </div>
    </article>
  );
};
