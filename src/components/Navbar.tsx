import React, { useState } from 'react';
import { Github, Mail, Linkedin, Menu, X, FileText, ExternalLink } from 'lucide-react';
import { USER_INFO } from '../data/projects';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Student identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm tracking-wider">
            HF
          </div>
          <div>
            <a href="#" className="font-bold text-slate-900 text-sm sm:text-base hover:text-sky-700 transition-colors leading-tight block">
              {USER_INFO.name}
            </a>
            <span className="text-[11px] font-mono text-slate-500 block leading-tight">
              Mechanical Engineering · Imperial College London
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition-colors">
            Projects
          </a>
          <a href="#research" className="hover:text-slate-900 transition-colors">
            Research Posters
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About & Skills
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>

          <div className="h-4 w-px bg-slate-200" />

          {/* GitHub direct button */}
          <a
            href={USER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-xs"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={USER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-700 hover:text-slate-900"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3 font-medium text-sm text-slate-700">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-sky-700"
          >
            Projects
          </a>
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-sky-700"
          >
            Research Posters
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-sky-700"
          >
            About & Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-sky-700"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">hakam.mohamed-fazeel25@imperial.ac.uk</span>
            <a
              href={USER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-sky-700 font-semibold"
            >
              GitHub Profile ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
