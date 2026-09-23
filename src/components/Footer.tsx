import React from 'react';
import { Github, Mail, Linkedin, Award, ExternalLink, ArrowUp, MapPin } from 'lucide-react';
import { USER_INFO } from '../data/projects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800">
          {/* Col 1: Bio / Institution */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
              <span className="w-7 h-7 rounded-md bg-sky-500 text-slate-950 flex items-center justify-center font-mono text-xs font-semibold">
                HF
              </span>
              <span>{USER_INFO.name}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Mechanical Engineering undergraduate at Imperial College London. Focused on FEA simulations, computational contact mechanics, and automotive lightweighting.
            </p>

            <div className="flex items-start gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span>Department of Mechanical Engineering, Imperial College London</span>
            </div>
          </div>

          {/* Col 2: Direct Contact - Shifted left with 5 columns for plenty of horizontal space */}
          <div className="md:col-span-5 space-y-2.5 min-w-0">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Get in Touch
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${USER_INFO.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white hover:underline transition-colors font-mono group max-w-full"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover:text-sky-300" />
                  <span className="break-all sm:break-normal text-xs sm:text-[13px]">{USER_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={USER_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover:text-sky-300" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={USER_INFO.laidlawNetwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Award className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover:text-sky-300" />
                  <span>Laidlaw Scholars Network</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={USER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                >
                  <Github className="w-3.5 h-3.5 text-sky-400 shrink-0 group-hover:text-sky-300" />
                  <span>github.com/Hakam-Fazeel</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Quick Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Academic Background & Skills
                </a>
              </li>
              <li>
                <a
                  href={USER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {USER_INFO.name} · Imperial College London
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
