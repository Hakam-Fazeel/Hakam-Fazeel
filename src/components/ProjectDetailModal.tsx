import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Award, User, Building, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectThumbnail } from './ProjectThumbnail';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative bg-white w-full max-w-3xl rounded-xl border border-slate-300 shadow-2xl overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
            <span className="font-semibold text-slate-800">{project.category}</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>{project.period}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Technical Visual Header */}
        <ProjectThumbnail project={project} priority />

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[65vh] overflow-y-auto space-y-6">
          {/* Title & Metadata */}
          <div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
              {project.subtitle}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 font-mono border-y border-slate-100 py-2.5">
              <div className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.institution}</span>
              </div>
              {project.supervisor && (
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Supervisor: {project.supervisor}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-600" />
                <span className="text-sky-800 font-medium">{project.period}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Performance Indicators & Quantified Impact
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-lg p-3 border border-slate-200/70">
                  <div className="text-[11px] font-mono text-slate-500 truncate">{m.label}</div>
                  <div className="text-lg font-bold font-mono text-slate-900 mt-1 flex items-baseline gap-1">
                    <span>{m.value}</span>
                    {m.change && (
                      <span className="text-xs text-emerald-600 font-medium">({m.change})</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modular Data Tables */}
          {project.dataTables && project.dataTables.length > 0 && (
            <div className="space-y-4">
              {project.dataTables.map((table, tIdx) => (
                <div key={tIdx} className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 flex items-center justify-between">
                    <span>{table.title}</span>
                    {table.subtitle && <span className="text-slate-500 font-normal">{table.subtitle}</span>}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs font-mono bg-white rounded-md border border-slate-200">
                      <thead>
                        <tr className="bg-slate-100/70 text-slate-700 text-left border-b border-slate-200">
                          {table.headers.map((h, hIdx) => (
                            <th key={hIdx} className={`p-2.5 ${hIdx > 0 ? 'text-right' : ''}`}>
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {table.rows.map((row, rIdx) => {
                          const isHighlightRow = table.highlightRowIndex === rIdx;
                          return (
                            <tr key={rIdx} className={isHighlightRow ? 'bg-emerald-50/50 font-semibold' : ''}>
                              {row.map((cell, cIdx) => {
                                const isHighlightCol = table.highlightColumnIndex === cIdx;
                                return (
                                  <td
                                    key={cIdx}
                                    className={`p-2.5 ${cIdx > 0 ? 'text-right' : ''} ${
                                      isHighlightCol ? 'text-emerald-700 font-bold' : 'text-slate-700'
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modular Comparison Grids */}
          {project.comparisonGrids && project.comparisonGrids.length > 0 && (
            <div className="space-y-3">
              {project.comparisonGrids.map((grid, gIdx) => (
                <div key={gIdx} className="bg-white p-4 rounded-lg border border-slate-200 text-xs font-mono">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                    <span className="font-semibold text-slate-900">{grid.title}</span>
                    {grid.subtitle && <span className="text-slate-500 text-[11px]">{grid.subtitle}</span>}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center pt-1">
                    {grid.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-2.5 bg-slate-50 rounded border border-slate-100">
                        <div className="text-[10px] text-slate-500 truncate">{item.label}</div>
                        <div className={`font-bold text-sm mt-0.5 ${item.isPositive ? 'text-emerald-700' : 'text-slate-900'}`}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modular Governing Equations */}
          {project.equations && project.equations.length > 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">
                Governing Equations & Mathematical Formulations
              </h4>
              <div className="space-y-2.5">
                {project.equations.map((eq, eqIdx) => (
                  <div key={eqIdx} className="bg-white p-3 rounded-md border border-slate-200 font-mono text-xs">
                    <div className="font-bold text-slate-900 mb-1">{eq.name}</div>
                    <div className="p-2 bg-slate-50 rounded text-slate-800 overflow-x-auto text-[11px] sm:text-xs">
                      {eq.formula}
                    </div>
                    {eq.description && <div className="text-[11px] text-slate-500 mt-1">{eq.description}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Research Abstract */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Abstract & Background
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.abstract}
            </p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Methodology & Simulation Setup
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {project.methodology.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold text-sky-700 mt-0.5 min-w-[16px]">
                    0{idx + 1}.
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Findings */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Key Engineering Findings
            </h4>
            <div className="space-y-2">
              {project.keyFindings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-md border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{finding}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Tools & Methodologies
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 font-mono">
              {project.techStack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-medium text-slate-800">{tech}</span>
                  {i < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-slate-300">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Primary Action */}
        <div className="px-5 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono text-center sm:text-left">
            <span>Repository: </span>
            <a 
              href={project.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-sky-700 underline font-semibold"
            >
              github.com/Hakam-Fazeel
            </a>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-md border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 text-xs font-medium transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>Open on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
