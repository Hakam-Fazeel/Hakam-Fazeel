import React, { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS, Project, PROJECT_CATEGORIES, ProjectCategory } from '../data/projects';
import { Filter, Layers, Github, ExternalLink, Search } from 'lucide-react';

interface ProjectGridProps {
  onOpenDetails: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onOpenDetails }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dynamically include defined categories plus any custom category strings from new projects
  const categoriesList = useMemo(() => {
    const list: ProjectCategory[] = [...PROJECT_CATEGORIES];
    PROJECTS.forEach((p) => {
      if (
        p.category &&
        !list.some(
          (c) =>
            c.label.toLowerCase() === p.category.toLowerCase() ||
            c.id.toLowerCase() === p.category.toLowerCase()
        )
      ) {
        list.push({
          id: p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          label: p.category,
        });
      }
    });
    return list;
  }, []);

  // Helper to check if a project matches a specific category ID
  const matchesCategory = (p: Project, categoryId: string) => {
    if (categoryId === 'all') return true;
    const catObj = categoriesList.find((c) => c.id === categoryId);
    const projectCat = (p.category || '').toLowerCase();
    const filterId = categoryId.toLowerCase();
    const filterLabel = (catObj?.label || '').toLowerCase();

    // 1. Direct match with id or label
    if (projectCat === filterId || projectCat === filterLabel) {
      return true;
    }
    // 2. Substring / contains match
    if (projectCat.includes(filterId) || filterLabel.includes(projectCat) || projectCat.includes(filterLabel)) {
      return true;
    }
    // 3. Keyword matching against category keywords
    if (
      catObj?.keywords &&
      catObj.keywords.some(
        (k) =>
          projectCat.includes(k.toLowerCase()) ||
          p.techStack.some((t) => t.toLowerCase().includes(k.toLowerCase())) ||
          (p.diagramType && p.diagramType.toLowerCase().includes(k.toLowerCase()))
      )
    ) {
      return true;
    }
    return false;
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesFilter = matchesCategory(p, selectedFilter);

      // Search matching
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.abstract.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery, categoriesList]);

  // Project count per category
  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return PROJECTS.length;
    return PROJECTS.filter((p) => matchesCategory(p, catId)).length;
  };

  return (
    <section id="projects" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono text-sky-800 font-semibold uppercase tracking-wider mb-1">
              Engineering Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Selected Projects & Simulations
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Click any project card to open its source code and complete technical repository on GitHub.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Showing {filteredProjects.length} of {PROJECTS.length} projects</span>
          </div>
        </div>

        {/* Filter Bar (Interactive tab buttons with active/inactive states) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
            {categoriesList.map((cat) => {
              const count = getCategoryCount(cat.id);
              const isActive = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-800 font-bold'
                        : 'bg-slate-200/70 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search input */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search by tool, method, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white placeholder-slate-400 focus:outline-hidden focus:border-sky-600 focus:ring-1 focus:ring-sky-600 font-mono"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-xl border border-slate-200">
            <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700">No matching projects found</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting the filter or clear your search query.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono text-sky-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* GitHub Repositories Banner */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono text-sky-400 font-semibold mb-1">
              CONTINUOUS CODE REPOSITORY
            </div>
            <h3 className="text-lg font-bold text-white">
              Explore All Engineering Code on GitHub
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Source code, MATLAB scripts, AutoForm input files, and CAD geometries are maintained at github.com/Hakam-Fazeel.
            </p>
          </div>

          <a
            href="https://github.com/Hakam-Fazeel"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>Visit @Hakam-Fazeel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
