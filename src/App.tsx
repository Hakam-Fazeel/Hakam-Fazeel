import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchShowcase } from './components/ResearchShowcase';
import { ProjectGrid } from './components/ProjectGrid';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900 flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Featured Research Posters (AutoForm & EHL Solvers) */}
        <ResearchShowcase onSelectProject={(p) => setSelectedProject(p)} />

        {/* Main Responsive Project Grid */}
        <ProjectGrid onOpenDetails={(p) => setSelectedProject(p)} />

        {/* Academic Profile & Technical Skills */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Research Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
