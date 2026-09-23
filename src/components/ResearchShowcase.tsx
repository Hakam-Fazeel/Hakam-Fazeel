import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, FileText, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';
import { FEATURED_PROJECTS, FeaturedProject } from '../featured-projects';
import { FeaturedSlideImage } from './FeaturedSlideImage';

interface ResearchShowcaseProps {
  onSelectProject: (p: Project) => void;
}

export const ResearchShowcase: React.FC<ResearchShowcaseProps> = ({ onSelectProject }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll positions to update button state & active dot
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate approximate active slide index
    const slideWidth = clientWidth * 0.85;
    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(0, index), FEATURED_PROJECTS.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slides = container.querySelectorAll<HTMLElement>('.featured-slide');
    if (slides[index]) {
      slides[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest'
      });
      setActiveIndex(index);
    }
  };

  const scrollByDirection = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleOpenDetails = (projectId?: string) => {
    if (!projectId) return;
    const project = PROJECTS.find((p) => p.id === projectId);
    if (project) {
      onSelectProject(project);
    }
  };

  return (
    <section id="research" className="py-12 sm:py-16 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-800 font-semibold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Imperial College London · Academic Research
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Research & Solvers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Swipe horizontally to explore key research posters, FEA models, and computational solvers.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Slide counter indicator */}
            <span className="text-xs font-mono text-slate-500 font-medium">
              {activeIndex + 1} / {FEATURED_PROJECTS.length}
            </span>

            <div className="inline-flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => scrollByDirection('left')}
                disabled={!canScrollLeft}
                className="p-1.5 rounded-md text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Previous featured project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByDirection('right')}
                disabled={!canScrollRight}
                className="p-1.5 rounded-md text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label="Next featured project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 px-0.5 no-scrollbar focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          tabIndex={0}
          aria-label="Horizontally scrollable list of featured engineering projects"
        >
          {FEATURED_PROJECTS.map((featured, index) => (
            <article
              key={featured.id}
              className="featured-slide group w-[88vw] sm:w-[82vw] md:w-[780px] lg:w-[940px] xl:w-[1020px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row text-left"
            >
              {/* Left Half: Text, Details & Author Info */}
              <div className="md:w-1/2 p-6 sm:p-7 lg:p-8 flex flex-col justify-between order-2 md:order-1 bg-white">
                <div>
                  {/* Eyebrow Tag */}
                  <div className="text-xs font-mono text-sky-800 font-semibold uppercase tracking-wider mb-2">
                    {featured.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-sky-700 transition-colors">
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {featured.title}
                    </a>
                  </h3>

                  {/* Subtitle / Quote / Research context */}
                  {featured.subtitle && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {featured.subtitle}
                    </p>
                  )}

                  {/* Summary paragraph */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {featured.summary}
                  </p>

                  {/* Key Metric Callout */}
                  {featured.keyMetric && (
                    <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200/80 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-mono text-slate-500 font-medium">
                          {featured.keyMetric.label}
                        </div>
                        {featured.keyMetric.note && (
                          <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                            {featured.keyMetric.note}
                          </div>
                        )}
                      </div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-emerald-700 shrink-0 ml-3">
                        {featured.keyMetric.value}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Row: Author & Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Author Profile Info (matches reference image style) */}
                  <div className="flex items-center gap-2.5">
                    {featured.author.avatar ? (
                      <img
                        src={featured.author.avatar}
                        alt={featured.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-900 font-mono text-xs font-bold flex items-center justify-center border border-sky-200">
                        {featured.author.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                    )}
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        {featured.author.name}
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {featured.author.role}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-sky-800 text-xs font-medium transition-colors shadow-xs"
                      title="Open GitHub repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    {featured.projectId && (
                      <button
                        type="button"
                        onClick={() => handleOpenDetails(featured.projectId)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                        title="View numerical findings and methodology"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-500" />
                        <span>Details</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Half: Big Image taking half of the featured slide! */}
              <div className="md:w-1/2 relative min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[460px] order-1 md:order-2 bg-slate-950">
                <FeaturedSlideImage project={featured} />
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {FEATURED_PROJECTS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-6 bg-sky-700'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchShowcase;
